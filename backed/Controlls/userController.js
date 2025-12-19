const User = require("../Models/User");

 const registerUser=async(req,res)=>{
    const user=await User.create(req.body);
    res.json(user);
};

module.exports={registerUser};