import Stripe from "stripe";

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.log(error.message);

    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  // PAYMENT SUCCESS

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const orderId = session.metadata.orderId;

    const userId = session.metadata.userId;

    // Update order

    await orderModel.findByIdAndUpdate(orderId, {
      payment: true,

      status: "Paid",
    });

    // Clear cart

    await userModel.findByIdAndUpdate(userId, {
      cartData: {},
    });
  }

  // PAYMENT FAILED

  if (event.type === "payment_intent.payment_failed") {
    console.log("Payment failed");
  }

  return res.status(200).json({
    received: true,
  });
};
