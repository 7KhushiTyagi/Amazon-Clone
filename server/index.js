const express = require('express');
const authRouter= require('./routes/auth');
const app= express();
const port=3000;

app.use(authRouter);

app.listen(port,"0.0.0.0",()=>{
    console.log(`Server is running on port ${port}`);
})


