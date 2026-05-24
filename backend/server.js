const express= require('express');
const cors= require('cors');

const app=express();

app.get('/',(req,res)=>{
    res.send("under process...");
});

app.listen(8080,()=>{
    console.log("server is working...");
});