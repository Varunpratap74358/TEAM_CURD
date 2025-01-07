import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import route from "./routes/route.js";

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
dotenv.config()

const PORT=process.env.PORT
const MONGOURL=process.env.MONGOURL

mongoose.connect(MONGOURL).then(()=>{
    console.log("DB si conntected");
    app.listen(PORT,()=>{
        console.log(`server is running PORT ${PORT}`);
        
    })
    
}).catch((err)=>{console.log(err);
})
app.use("/api",route)