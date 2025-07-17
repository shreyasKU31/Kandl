import { useState, useEffect } from "react";
import Order from "./Order";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/order").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium py-2 mb-8 border-b-2">Positions</h2>
      </div>
      <div className="order font-medium">
        <p className="text-left">Ticker Name</p>
        <p>Quantity</p>
        <p className="max-lg:hidden">Average Price</p>
        <p>Type</p>
      </div>
      {orders.map((orders, id) => (
        <Order order={orders} id={id} />
      ))}
    </div>
  );
};

export default Orders;
