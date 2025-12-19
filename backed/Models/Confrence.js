const { mongoose } = require("mongoose");

const confSchema=new mongoose.Schema({
    title:String,
    date:String,
});

module.exports = mongoose.model("Conference", confSchema);