import express from 'express'
import { placeOrder,placeOrderStripe,userOrders,allOrders,updateStatus } from '../controllers/orderController.js'
import adminAuth from "../middlewares/adminAuth.js"
import authUser from "../middlewares/auth.js"
// import { stripeWebhook } from '../hooks/stripeWebhook.js'
const orderRouter = express.Router();

//admin features
orderRouter.post('/list', adminAuth,allOrders);
orderRouter.post('/status', adminAuth,updateStatus);

//payment features
orderRouter.post('/place',authUser ,placeOrder);
orderRouter.post('/stripe',authUser ,placeOrderStripe);

//user features
orderRouter.post('/userorders', authUser, userOrders)


export default orderRouter;
