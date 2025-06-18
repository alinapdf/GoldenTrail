import { getCsrfCookie, request } from './auth';

export async function fetchOrders() {
  const token = localStorage.getItem('token');
  if (!token) return [];
  await getCsrfCookie();
  return request('/api/orders');
}
