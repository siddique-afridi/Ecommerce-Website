import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "../config/dbConfig.js";
import connectCloudinary from "../config/cloudinary.js";
import userRouter from "../routes/userRoute.js";
import productRouter from "../routes/productRoute.js";
import cartRouter from "../routes/cartRoutes.js";
import orderRouter from "../routes/orderRoute.js";
import logger from "../middlewares/apiLogger.js";
import { stripeWebhook } from "../hooks/stripeWebhook.js";

const app = express();

connectDB();
connectCloudinary();

//stripe webhook
app.post(
  "/api/order/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

//middlewares
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(logger);

//routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/", (req, res) => {
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  res.send({
    message: "Backend is running",
    code: 200,
    time: `${h}:${m}:${s}`,
  });
});

//for vercel deployment (serverless functions)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;

  app.listen(port, () =>
    console.log("Server running on port: " + port)
  );
}

// Export for Vercel
export default app;