const express= require('express');

const User= require('../models/user');

const router=express.Router();

router.post('/login',async (req,res)=>{
        const {email,password}=req.body;
        if(!email||!password) res.status(400).json({message:"Fill all details"});
        try{
            const user=await User.findOne({email,password});
            if(!user)
                res.status(404).json({message:"Invalid Credentials"});
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    });

router.post('/signup',async (req,res)=>{
        const {name,email,password,role}=req.body;
        if(!name||!email||!password) res.status(400).json({message:"Fill all details..."});
        try{
            const user=await User.create({
                name,
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

module.exports=router;