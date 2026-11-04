export type Order = { id: string; title: string; total: number };

export async function fetchOrders(): Promise<Order[]> {
  const res = await fetch("/api/orders");
  return res.json();
}
