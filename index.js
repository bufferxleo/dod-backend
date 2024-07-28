import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

import { connectDB } from "./config/db.js";
connectDB();

const port=process.env.PORT || 3001;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));;
app.use(bodyParser.json());

import cors from 'cors'
app.use(cors())

import userRoutes from "./routes/user.routes.js"
app.use('/user',userRoutes);

app.listen(port,()=>{console.log(`server running at ${port}`)});