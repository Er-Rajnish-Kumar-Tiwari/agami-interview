import User from "../Models/User"

export const registerUser=async(req,res)=>{
    const user=await User.create(req.body);
    res.json(user);
};