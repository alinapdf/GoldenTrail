const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const resp = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });

  let data = null;
  try {
    data = await resp.json();
  } catch {
    // ignore JSON parse errors
  }

  if (!resp.ok) {
    const message =
      (data && (data.message || data.error)) || 'Ошибка запроса';
    throw new Error(message);
  }

  return data;
}

export async function login(credentials) {
  const data = await request('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  if (data.token) localStorage.setItem('token', data.token);
  return data;
}

export async function register(info) {
  const data = await request('/register', {
    method: 'POST',
    body: JSON.stringify(info),
  });
  if (data.token) localStorage.setItem('token', data.token);
  return data;
}

export { API_BASE_URL };
