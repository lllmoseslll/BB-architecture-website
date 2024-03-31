import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';

dotenv.config();
const app = express(); 
const port = 3000;


mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch(err =>{
    console.log(err);
});


app.use('/api/user', userRoute);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});