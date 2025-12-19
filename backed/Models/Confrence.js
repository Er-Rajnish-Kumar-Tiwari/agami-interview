const { default: mongoose } = require("mongoose");

const confSchema=new mongoose.Schema({
    title:String,
    date:String,
});

export default mongoose.model("Conference",confSchema);