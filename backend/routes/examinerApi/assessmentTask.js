const express= require('express');
const Assessment= require('../../models/examiner/assessment');

const router=express.Router();

router.route('/create-assessment')
    .post(async (req,res)=>{
        const{title,skill,total,pass,duration}=req.body;
        if(!title||!skill||!duration) return res.status(400).json({message:"All data field required"});
        try{
            const assessment=await Assessment.create({
                title,
                skill_cat:skill,
                tot_marks:total,
                pass_marks:pass,
                duration
            })
            res.status(201).json({message:"Successfully Created",assessment});
        }catch(error){
            res.status(500).json({message:error.message});
        }
    });

module.exports=router;