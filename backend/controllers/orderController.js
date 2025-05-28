import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Place a new order
export const placeOrder = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ success: false, message: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded.email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const { items, method, mobile, zipcode, address } = req.body;
    const order = new orderModel({
      user: user._id,
      items,
      method,
      mobile,
      zipcode,
      address,
    });
    await order.save();
    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("user", "name email");
    console.log("Orders fetched:", orders);

    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyOrdersCount = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ success: false, message: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded.email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const count = await orderModel.countDocuments({ user: user._id });
    res.json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
