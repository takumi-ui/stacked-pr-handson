import { useOrders } from "../hooks/useOrders";

export function OrderList() {
  const orders = useOrders();
  return (
    <ul>
      {orders.map((o) => (
        <li key={o.id}>{o.title}</li>
      ))}
    </ul>
  );
}
