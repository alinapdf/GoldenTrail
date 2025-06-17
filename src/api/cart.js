import { API_BASE_URL, getCsrfCookie, request } from './auth';

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
  return request('/api/cart', {
    method: 'POST',
    body: JSON.stringify(item),
  });
}

export async function fetchCartItems() {
  const token = localStorage.getItem('token');
  if (!token) return [];
  await getCsrfCookie();
  return request('/api/cart');
}
