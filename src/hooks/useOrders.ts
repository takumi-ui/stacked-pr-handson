import { useEffect, useState } from "react";
import { fetchOrders, type Order } from "../api/orders";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);
  return orders;
}
