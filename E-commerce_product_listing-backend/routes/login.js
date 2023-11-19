const express = require('express');
const router = express.Router();
const{AuthenticateUser} =require('../controllers/login')



router.post('/',async (req,res)=>{
   const{email,password} = await req.body
   const logincred = await AuthenticateUser(email,password)
   if(logincred === "Invalid Username or Password"){
   res.status(200).send("Invalid Username or Password")
   }else if(logincred === "Server Busy"){
    res.status(200).send("Server Busy")
   }
    
   
});

module.exports= router