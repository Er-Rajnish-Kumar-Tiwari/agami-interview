import mongoose from "mongoose";

export default mongoose.model("Feedback",new mongoose.Schema({message:String}));