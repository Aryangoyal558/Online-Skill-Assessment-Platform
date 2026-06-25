require('dotenv').config();

const express= require('express');
const cors= require('cors');
const cookieParser=require('cookie-parser');

const mongoDB= require('./connection');
const staticAssessmentRoute= require('./routes/staticDashboard');
const signin_upRoute= require('./routes/signin_up');

const app=express();
const port=process.env.PORT;
const mongo_url=process.env.MONGO_URI;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/dashboard',staticAssessmentRoute);
app.use('/signin_up',signin_upRoute);

app.get('/',(req,res)=>{
    res.send("You choose wrong route '/' is not available till the project completion");
});

mongoDB(mongo_url)
    .then(()=>{console.log("database working...")})
    .catch((err)=>{console.log("error occurs")});

app.listen(port,()=>{
    console.log("server is working...");
});