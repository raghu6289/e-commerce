import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [mobile, setMobile] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { navigate, clearCart, cartItems, products, placeOrder } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  const stored = localStorage.getItem("user");
  if (!stored) {
    toast.error("Please log in to place an order");
    return;
  }
  const { token } = JSON.parse(stored);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const product = products.find((p) => p._id === items);
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
            name: product?.name || "",
            image: product?.image?.[0] || "",
            price: product?.price || 0,
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const handlePlaceOrder = async () => {
    try {
      const order = {
        items: cartData,
        method,
        mobile,
        zipcode,
        address: "", // You can collect address from your form if needed
      };
      await placeOrder(order);
      clearCart();
      navigate("/orders");
    } catch (error) {
      console.error("Order placement failed:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side Content */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Zip Code"
            value={zipcode}
            onChange={(e) => {
              // Only allow numbers and max 10 digits
              const val = e.target.value.replace(/\D/g, "");
              if (val.length <= 6) setZipcode(val);
            }}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Mobile"
          maxLength={10}
          value={mobile}
          onChange={(e) => {
            // Only allow numbers and max 10 digits
            const val = e.target.value.replace(/\D/g, "");
            if (val.length <= 10) setMobile(val);
          }}
        />
      </div>
      {/* Right Side Content */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        {/* Payment Methods Selection */}
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHODS"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-600" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-600" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="RazorPay"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 p-2 px-3 border cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-600" : ""
                }`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button
              onClick={handlePlaceOrder}
              className="px-16 py-3 text-sm text-white bg-black active:bg-gray-800"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
