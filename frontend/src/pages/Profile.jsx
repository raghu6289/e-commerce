import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const toCamelCase = (str) =>
  str
    ? str
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    : "";

const Profile = () => {
  const { user } = useContext(ShopContext);
  const [orderCount, setOrderCount] = useState("N/A");

  useEffect(() => {
    const fetchOrderCount = async () => {
      if (!user || !user.token) return;
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/myOrdersCount`,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const data = await res.json();
        if (data.success) setOrderCount(data.count);
      } catch {
        setOrderCount("N/A");
      }
    };
    fetchOrderCount();
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-4">
        <p>
          <span className="font-medium">Name:</span>{" "}
          {user.name ? (
            toCamelCase(user.name)
          ) : (
            <span className="text-gray-400">N/A</span>
          )}
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          {user.email || <span className="text-gray-400">N/A</span>}
        </p>
        <p>
          <span className="font-medium">Phone Number:</span>{" "}
          {user.phone ? (
            toCamelCase(user.phone)
          ) : (
            <span className="text-gray-400">N/A</span>
          )}
        </p>
        <p>
          <span className="font-medium">Address:</span>{" "}
          {user.address ? (
            toCamelCase(user.address)
          ) : (
            <span className="text-gray-400">N/A</span>
          )}
        </p>
      </div>
      <div>
        <span className="font-medium">Total Orders:</span> {orderCount}
      </div>
    </div>
  );
};

export default Profile;
