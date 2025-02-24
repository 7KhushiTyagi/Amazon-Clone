const express = require("express");
const User = require("../models/users");
const authRouter = express.Router();

authRouter.get("/user", (req, res) => {
  res.send("User route");
});

module.exports = authRouter;

authRouter.post("/api/signup", async (req, res) => {
  
  const { name, email, password } = req.body;
  
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  

});

module.exports = authRouter;
