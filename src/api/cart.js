import { getCsrfCookie, request } from './auth';
import { formatImageUrl } from './images';

export function productToCartItem(product, opts = {}) {
  const quantity = Number(opts.quantity ?? product.quantity ?? 1) || 1;
  const parseId = (v) => {
    if (v == null || v === '') return null;
    if (typeof v === 'object') v = v.id ?? v.value ?? v.key;
    const n = Number(v);
    return Number.isNaN(n) ? null : n;
  };

  const colorSrc =
    opts.color ?? opts.product_color_id ?? product.selectedColor ?? product.color ?? product.product_color_id ?? product.colors?.[0];
  const sizeSrc =
    opts.size ?? opts.product_size_id ?? product.selectedSize ?? product.size ?? product.product_size_id ?? product.sizes?.[0];

  const parsePrice = (price) => {
    if (price == null) return 0;
    if (typeof price === 'number') return price;
    const cleaned = String(price).replace(/[^0-9.,]/g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
  };

  return {
    product_id: product.id,
    quantity,
    product_color_id: parseId(colorSrc),
    product_size_id: parseId(sizeSrc),
    price: parsePrice(product.mainPrice ?? product.price),
  };
}

export async function addCartItem(item) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request('/api/cart', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function fetchCartItems() {
  const token = localStorage.getItem('token');
  if (!token) return [];
  await getCsrfCookie();
  const data = await request('/api/cart');
  if (Array.isArray(data)) {
    return data.map((item) => {
      const key = `${item.product_id}-${item.product_size_id || ''}-${item.product_color_id || ''}`;
      return {
        ...item,
        image: formatImageUrl(item.image),
        _key: key,
      };
    });
  }
  return data;
}

export async function removeCartItem(id) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request(`/api/cart/${id}`, { method: 'DELETE' });
}

export async function incrementCartItem(id) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request(`/api/cart/${id}/increment`, { method: 'POST' });
}

export async function decrementCartItem(id) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request(`/api/cart/${id}/decrement`, { method: 'POST' });
}
