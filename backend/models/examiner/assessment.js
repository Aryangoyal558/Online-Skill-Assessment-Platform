const mongoose= require('mongoose');

const assessmentSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    skill_cat:{
        type:String,
        required:true,
    },
    tot_marks:{
        type:Number,
        default:100
    },
    pass_marks:{
        type:Number,
        default:50
    },
    duration:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["Draft","Published"],
        default:"Draft"
    }
},{timestamps:true});

const Assessment=mongoose.model('assessment',assessmentSchema);

module.exports=Assessment;