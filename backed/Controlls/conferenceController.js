const Confrence = require("../Models/Confrence");

 const addConference=async(req,res)=>{
    const conference=await Confrence.create(req.body);
    res.json(conference);
}

 const getConferences=async(req,res)=>{
    const conferences=await Confrence.find({});
    res.json(conferences);
}

module.exports={addConference,getConferences};