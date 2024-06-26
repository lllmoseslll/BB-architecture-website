import User from "../models/user.models.js";
import bcryptjs from "bcryptjs"

export const signUp = async (req, res )=> {
    const {username, email, password} = req.body;

    if (
        !username || !password || !email || !username ==='' || !password === '' || !email === '') {
        return res.status(400).json({message:"all fields required"})
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,   
        email,
        password: hashedPassword,
    })

    try {
        await newUser.save();
        res.json({message:"success"});
        
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }

  
};