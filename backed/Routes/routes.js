const  { addConference, getConferences }  = require("../Controlls/conferenceController");
const { addFeedback } = require("../Controlls/feedbackController");
const { registerUser } = require("../Controlls/userController");

const express=require("express");

const router=express.Router();
router.post("/register",registerUser);
router.post("/conference",addConference);
router.get("/conferences",getConferences);
router.post("/feedback",addFeedback);

export default router;