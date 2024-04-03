import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

const port = 3000;
const app = express(); 
app.use(express.json());



mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch(err =>{
    console.log(err);
});

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "enteral server error";
    res.status(statusCode).json({
        sucees: false,
        statusCode,
        message,
    });

})

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});