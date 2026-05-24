const express= require('express');

const router=express.Router();

router.route('/login')
    .get((req,res)=>{
        res.send("login is under process");
    })
    .post((req,res)=>{
        res.send("login post is in under process");
    });

router.route('/signup')
    .get((req,res)=>{
        res.send('welcome new user to our under process signup page');
    })
    .post((req,res)=>{
        res.send('signup post is in under process');
    });

module.exports=router;