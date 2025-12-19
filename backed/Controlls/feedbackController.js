const Feedback = require("../Models/Feedback");

exports.addFeedback=async(req,res)=>{
    const feedback=await Feedback.create(req.body);
    res.json(feedback);
};