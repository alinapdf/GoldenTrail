import { API_BASE_URL, getCsrfCookie } from './auth';

export function productToCartItem(product, opts = {}) {
  const quantity = opts.quantity || 1;
  const getId = (v) => {
    if (!v) return null;
    return typeof v === 'object' ? v.id : v;
  };

  const parsePrice = (price) => {
    if (price == null) return 0;
    if (typeof price === 'number') return price;
    const cleaned = String(price).replace(/[^0-9.,]/g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
  };

  return {
    product_id: product.id,
    quantity,
    product_color_id: getId(product.colors?.[0]),
    product_size_id: getId(product.sizes?.[0]),
    price: parsePrice(product.mainPrice ?? product.price),
  };
}

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

export async function fetchCartItems() {
  const token = localStorage.getItem('token');
  if (!token) return [];
  await getCsrfCookie();
  const headers = {
    Accept: 'application/json',
  };
  const language = localStorage.getItem('language') || navigator.language?.slice(0, 2);
  if (language) headers['X-Language'] = language;
  headers['Authorization'] = `Bearer ${token}`;
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (match) headers['X-XSRF-TOKEN'] = decodeURIComponent(match[1]);
  const resp = await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'GET',
    credentials: 'include',
    headers,
  });
  if (!resp.ok) throw new Error('Network request failed');
  return resp.json();
}
