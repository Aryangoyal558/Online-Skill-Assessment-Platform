const express= require('express');
const {createToken}=require('../services/auth');
const User= require('../models/user');

const router=express.Router();

router.post('/login',async (req,res)=>{
        const {email,password}=req.body;
        if(!email||!password) return res.status(400).json({message:"Fill all details"});
        try{
            const user=await User.findOne({email,password});
            if(!user)
                return res.status(404).json({message:"Invalid Credentials"});
            const token=createToken(user);
            res.cookie('uid',token);
            res.status(200).json({user_id:user._id,role:user.role});
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    });

router.post('/signup',async (req,res)=>{
        console.log(req.body);
        const {fullName,email,password,role}=req.body;
        if(!fullName||!email||!password) return res.status(400).json({message:"Fill all details..."});
        try{
            const user=await User.create({
                name:fullName,
                email,
                password,
                role
            });
            res.status(201).json({
                message:"User created Successfully",
                user
            });
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    });

router.post('/change-pass',async (req,res)=>{
        const {email,password,con_pass}=req.body;
        if(!email) return res.status(400).json({message:"All Data field required"});
        if(password!==con_pass) return res.status(401).json({message:"Password should be same as Confirm password"});
        try{
            const user=await User.findOneAndUpdate({email},{$set:{password}},{new:true});
            if(!user) return res.status(404).json({message:"User not found"});
            res.status(201).json({user});
        }catch(error){
            res.status(500).json({message:error.message});
        }
    });

module.exports=router;