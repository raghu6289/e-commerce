import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your admin token logic
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/user/listOrders",
          { headers: { token } }
        );
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (error) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  console.log("Orders:", orders);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Order ID</th>
              <th className="border px-2 py-1">User</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Items</th>
              <th className="border px-2 py-1">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border px-2 py-1">{order._id}</td>
                <td className="border px-2 py-1">
                  {order.user?.name || "N/A"}
                  <br />
                  {order.user?.email || ""}
                </td>
                <td className="border px-2 py-1">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="border px-2 py-1">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      {item.name} (x{item.quantity})
                    </div>
                  ))}
                </td>
                <td className="border px-2 py-1">
                  ₹
                  {order.items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
