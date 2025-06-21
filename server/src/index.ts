import express from "express";
import allRoutes from "./routes/index"
import { configDotenv } from "dotenv";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
const app = express();
configDotenv();
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1',allRoutes)
mongoose.connect(process.env.mongo_url as string)
app.listen(5000,()=>{
    console.log("server is started on port 5000")
    // console.log(process.env.mongo_url)
    // console.log(rq)
})