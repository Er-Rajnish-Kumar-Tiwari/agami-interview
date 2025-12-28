const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dbConnection = require("./Config/db.js");
const connectedCloudinary = require("./Config/cloudnary.js");
require("dotenv").config();


const app=express();
app.use(express.json());
app.use(cors());
dbConnection();
connectedCloudinary();
app.use("/api/articles", require("./Routes/articleRoutes.js"));


 
app.listen(process.env.PORT);