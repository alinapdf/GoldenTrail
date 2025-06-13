import { API_BASE_URL } from './auth';

export async function fetchProducts() {
  const resp = await fetch(`${API_BASE_URL}/api/products`, {
    credentials: 'include',
  });
  if (!resp.ok) throw new Error('Network request failed');
  return resp.json();
}
