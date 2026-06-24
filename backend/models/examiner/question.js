const mongoose= require("mongoose");

const questionSchema= new mongoose.Schema({
    questionText:{
        type:String,
        required:true
    },
    questionType:{
        type:String,
        enum:["MCQ","Coding"],
        required:true
    },
    options:[{
        type:String
    }],
    correctAnswer:{
        type:String
    },
    skillCategory:{
        type:String,
        required:true
    },
    difficultyLevel:{
        type:String,
        enum:["Easy","Medium","Hard"],
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
},{timestamps:true});

const Question=mongoose.model('question',questionSchema);

module.exports=Question;