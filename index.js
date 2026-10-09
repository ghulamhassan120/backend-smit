const express = require("express");
const router =require("./routes/auth.route.js")
const app=express();
app.use(express.json())
app.use("/auth",router)

app.listen(4000,()=>{
    console.log("server is running")
})