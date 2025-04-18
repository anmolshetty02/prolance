import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/index.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const initialize = (app) => {
    const allowedOrigins = [
        "http://localhost:3001",
        "https://prolance-omega.vercel.app"
      ];
      
      app.use(cors({
        origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
        credentials: true
      }));
    
    app.use(express.json());
    app.use(cookieParser());
    //app.use(express.urlencoded());
    dotenv.config();
    mongoose.connect(process.env.MONGOCONNECTION);
    registerRouter(app);
}

export default initialize;