import { getCsrfCookie, request } from './auth';
import { formatImageUrl } from './images';

function parseId(v) {
  if (v == null || v === '') return null;
  if (typeof v === 'object') v = v.id ?? v.value ?? v.key;
  const n = Number(v);
  return Number.isNaN(n) ? null : n;
}

export function productToFavorite(item, opts = {}) {
  const colorSrc =
    opts.color ?? opts.product_color_id ?? item.selectedColor ?? item.color ?? item.product_color_id ?? item.colors?.[0];
  const sizeSrc =
    opts.size ?? opts.product_size_id ?? item.selectedSize ?? item.size ?? item.product_size_id ?? item.sizes?.[0];
  return {
    product_id: item.id ?? item.product_id,
    product_color_id: parseId(colorSrc),
    product_size_id: parseId(sizeSrc),
  };
}

export async function addFavorite(fav) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(fav),
  });
}

export async function fetchFavorites() {
  const token = localStorage.getItem('token');
  if (!token) return [];
  await getCsrfCookie();
  const data = await request('/api/favorites');
  if (Array.isArray(data)) {
    return data.map((item) => {
      const image = formatImageUrl(item.image);
      return {
        ...item,
        image,
        img: image,
      };
    });
  }
  return data;
}

export async function removeFavorite(id) {
  const token = localStorage.getItem('token');
  if (!token) return null;
  await getCsrfCookie();
  return request(`/api/favorites/${id}`, { method: 'DELETE' });
}
