const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (match) headers['X-XSRF-TOKEN'] = decodeURIComponent(match[1]);
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

export async function getCsrfCookie() {
  await fetch(`${API_BASE_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  });
}

export async function register(info) {
  await getCsrfCookie();
  const data = await request('/api/register', {
    method: 'POST',
    body: JSON.stringify(info),
  });
  if (data.token) localStorage.setItem('token', data.token);
  return data;
}

export { API_BASE_URL };
