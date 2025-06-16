import { API_BASE_URL, getCsrfCookie } from './auth';

export async function addCartItem(item) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const language = localStorage.getItem('language') || navigator.language?.slice(0, 2);
  if (language) headers['X-Language'] = language;
  headers['Authorization'] = `Bearer ${token}`;
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (match) headers['X-XSRF-TOKEN'] = decodeURIComponent(match[1]);
  const resp = await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(item),
  });
  if (!resp.ok) throw new Error('Network request failed');
  return resp.json();
}
