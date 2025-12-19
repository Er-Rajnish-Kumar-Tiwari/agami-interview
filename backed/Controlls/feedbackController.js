const Feedback = require("../Models/Feedback");

 const addFeedback=async(req,res)=>{
    const feedback=await Feedback.create(req.body);
    res.json(feedback);
};

module.exports={addFeedback};