require('dotenv').config();
const jwt= require('jsonwebtoken');

const key=process.env.SECRET_KEY;

function createToken(user){
    return jwt.sign({
        _id:user._id,
        email:user.email
    },key);
};

function getToken(id){
    if(!id) return null;
    try{
        return jwt.verify(id,key);
    }catch(error){
        return null;
    }

}

module.exports={createToken,getToken};