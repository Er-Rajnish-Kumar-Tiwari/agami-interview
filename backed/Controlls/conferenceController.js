import Confrence from "../Models/Confrence";

export const addConference=async(req,res)=>{
    const conference=await Confrence.create(req.body);
    res.json(conference);
}

export const getConferences=async(req,res)=>{
    const conferences=await Confrence.find({});
    res.json(conferences);
}