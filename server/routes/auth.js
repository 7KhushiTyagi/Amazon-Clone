const express= require('express');
const authRouter=express.Router();

authRouter.get('/user',(req,res)=>{
    res.send('User route');
})

module.exports=authRouter;
