const Confrence=require("../Models/Confrence");

exports.addConference=async(req,res)=>{
    const conference=await Confrence.create(req.body);
    res.json(conference);
}

exports.getConferences=async(req,res)=>{
    const conferences=await Confrence.find({});
    res.json(conferences);
}