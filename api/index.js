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




app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});