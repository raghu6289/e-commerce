import express from "express";
import {
  loginUser,
  registerUser,
  loginAdmin,
  getProfile,
} from "../controllers/userController.js";
import {
  listOrders,
  getMyOrdersCount,
} from "../controllers/orderController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", loginAdmin);
userRouter.get("/profile", getProfile);
userRouter.get("/listOrders", listOrders);
userRouter.get("/myOrdersCount", getMyOrdersCount);

export default userRouter;
