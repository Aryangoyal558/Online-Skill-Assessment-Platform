const {getToken}= require('../services/auth');

function handleLogin(req,res,next){
    const id=req.cookies?.uid;
    if(!id) return res.status(400).json({message:"No Cookie Id"});
    const user=getToken(id);
    if(!user) return res.status(401).json({message:"Invalid Id"});
    req.user=user;
    next();
}

module.exports=handleLogin;