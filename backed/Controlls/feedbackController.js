import Feedback from "../Models/Feedback";

export const addFeedback=async(req,res)=>{
    const feedback=await Feedback.create(req.body);
    res.json(feedback);
};