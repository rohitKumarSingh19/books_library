import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken.js";
export const registerUser=async(req,res)=>{
    const {email,password}=req.body;
    const userExists=await User.findOne({email});
    if(userExists) return res.status(400).json({message:'User already exists'});
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({email,password:hashedPassword});
    if(user){
        generateToken(res,user._id);
        res.status(201).json({_id:user._id,email:user.email});
    }
    else{
        res.status(400).json({message:"Invalid user data"});
    }
};
export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        generateToken(res,user._id);
        res.json({_id:user._id,email:user.email});
    }
    else{
        res.status(401).json({message:'Invalid email or password'});
    }
}
export const logoutUser=(req,res)=>{
    res.cookie("jwt","",{httpOnly:true,expires:new Date(0)});
    res.json({message:"Logged out"})
}