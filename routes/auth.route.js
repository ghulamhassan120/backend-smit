const express =require("express");
const { createUser } = require("../model/User");
const router=express.Router()

router.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    const users=await createUser(email,password)
    res.json({
        success:true,
        data:users,
        message:"Signup Succesfully"
    })
})
module.exports=router