import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import connectCloudinary from "./config/cloudinary.js";


//App config
dotenv.config();
const app = express();
const port = process.env.PORT || 5000
connectDB();
connectCloudinary();

//middleware
app.use(express.json())
app.use(cors())

//api endpoints

app.get('/', (req,res)=> {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    res.send({message:"Backend is running", code: 200, time:`${h}:${m}:${s}` })
})


app.listen(port, ()=> console.log('Server running on port :' + port))