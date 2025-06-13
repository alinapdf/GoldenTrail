const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const csrfToken = localStorage.getItem('csrfToken');
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (csrfToken) headers['X-CSRF-Token'] = csrfToken;
  const resp = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  });
  if (!resp.ok) throw new Error('Network request failed');
  return resp.json();
}

export async function login(credentials) {
  const data = await request('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  if (data.token) localStorage.setItem('token', data.token);
  return data;
}

export async function getCsrfToken() {
  const resp = await fetch(`${API_BASE_URL}/csrf-token`, {
    credentials: 'include',
  });
  if (!resp.ok) throw new Error('Network request failed');
  const data = await resp.json();
  if (data.csrfToken) localStorage.setItem('csrfToken', data.csrfToken);
  return data.csrfToken;
}

export async function register(info) {
  await getCsrfToken();
  const data = await request('/register', {
    method: 'POST',
    body: JSON.stringify(info),
  });
  if (data.token) localStorage.setItem('token', data.token);
  return data;
}

export { API_BASE_URL };
