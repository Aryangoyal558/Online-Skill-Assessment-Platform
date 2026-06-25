const express= require('express');
const handleToken=require('../middlewares/auth');
const examinerApiRoute=require('./examinerApi/assessmentTask');

const router=express.Router();

router.use('/examiner',handleToken,examinerApiRoute);

module.exports=router;