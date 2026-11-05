import type { Order } from "./orders";

export async function searchOrders(keyword: string): Promise<Order[]> {
  const params = new URLSearchParams({ q: keyword });
  const res = await fetch(`/api/orders/search?${params}`);
  if (!res.ok) throw new Error(`Failed to search orders: ${res.status}`);
  return res.json();
}
