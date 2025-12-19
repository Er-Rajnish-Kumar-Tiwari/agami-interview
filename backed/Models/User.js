const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
});

export default mongoose.model("User",userSchema);