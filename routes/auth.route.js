const express = require("express");
const { createUser } = require("../model/User");
const { login } = require("../controller/auth.controller");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const users = await createUser(email, password);
  res.json({
    success: true,
    data: users,
    message: "Signup Succesfully",
  });
});

router.post("/login", async (req, res) => {
  try {
    const resp = await login(req.body.email, req.body.password);
    
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
