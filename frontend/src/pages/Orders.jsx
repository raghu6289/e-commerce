import React, { useEffect, useState } from "react";
import Title from "../components/Title";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders.reverse()); // Show latest first
  }, []);

  return (
    <div className="pt-16 border-t">
      <div className="text-2xl">
        <Title text1={"YOUR"} text2={"ORDERS"} />
      </div>
      <div>
        {orders.length === 0 ? (
          <p className="mt-8 text-center text-gray-500">No orders yet.</p>
        ) : (
          orders.map((order, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="mb-2 text-gray-400">
                  Order Date: {new Date(order.date).toLocaleDateString()}
                </p>
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 text-sm mb-2">
                    <img
                      className="w-16 sm:w-20"
                      src={item.image || "/default-product.jpg"}
                      alt="Photo"
                    />
                    <div>
                      <p className="font-medium sm:text-base">{item.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                        <p className="text-lg">
                          $
                          {item.price?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                        <p>Qty: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                <p className="text-sm md:text-base">Ready for Shipping</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
