const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dbConnection = require("./Config/db.js");
require("dotenv").config();


const app=express();
app.use(express.json());
app.use(cors());
dbConnection();
 

app.listen(process.env.PORT);