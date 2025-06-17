import { API_BASE_URL } from './auth';

const base = (import.meta.env.VITE_IMAGE_BASE_URL || `${API_BASE_URL}/storage/product-images`).replace(/\/$/, '');

export const IMAGE_BASE_URL = base;

export function formatImageUrl(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  const trimmed = String(path).replace(/^\/+/, '');
  return `${IMAGE_BASE_URL}/${trimmed}`;
}
