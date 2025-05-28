import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      name: String,
      image: String,
      price: Number,
      size: String,
      quantity: Number,
    },
  ],
  date: { type: Date, default: Date.now },
  method: String,
  mobile: String,
  zipcode: String,
  address: String,
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
