import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import logger from "./middlewares/apiLogger.js"
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

//App config
const app = express();
const port = process.env.PORT || 5000
connectDB();
connectCloudinary();

//middleware
app.use(express.json())
app.use(cors())
app.use(logger)

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)


app.get('/', (req,res)=> {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    res.send({message:"Backend is running", code: 200, time:`${h}:${m}:${s}` })
})


app.listen(port, ()=> console.log('Server running on port :' + port))