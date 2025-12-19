const { mongoose } = require("mongoose");

module.exports = mongoose.model("Feedback",new mongoose.Schema({message:String}));