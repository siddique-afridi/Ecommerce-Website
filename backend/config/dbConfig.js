
import mongoose from "mongoose";


const connectDB = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

