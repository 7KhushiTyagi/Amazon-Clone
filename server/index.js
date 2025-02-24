const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const app = express();
const port = 3000;
const DB= "mongodb+srv://Khushi:m1519%403215M@cluster0.7gevn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(authRouter);

mongoose.connect(DB)
  .then(() => {
    console.log("connection granted");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


