export type Order = { id: string; title: string; total: number };

export async function fetchOrders(): Promise<Order[]> {
  const res = await fetch("/api/orders");
  if (!res.ok) throw new Error(`Failed to fetch orders: ${res.status}`);
  return res.json();
}
