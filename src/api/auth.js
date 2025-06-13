// API helper for authentication

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function getCsrfToken() {
  await fetch(`${API_BASE_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  });
}

async function request(url, options = {}) {
  const defaults = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
    },
  };

  const config = {
    ...defaults,
    ...options,
    headers: { ...defaults.headers, ...(options.headers || {}) },
  };

  const res = await fetch(`${API_BASE_URL}${url}`, config);
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : '';
}

export async function login(data) {
  await getCsrfToken();
  return request('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function register(data) {
  await getCsrfToken();
  return request('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export { request };
