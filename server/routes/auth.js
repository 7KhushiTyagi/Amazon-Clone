const express= require('express');
const authRouter=express.Router();


authRouter.get('/user',(req,res)=>{
    res.send('User route');
})

module.exports=authRouter;

authRouter.post('/api/signup',(req,res)=>{
    //get the data from the user
    const {name,email,password}= req.body;
    //post the data in database
    
    //return the data to the user
    
})

module.exports=authRouter;
