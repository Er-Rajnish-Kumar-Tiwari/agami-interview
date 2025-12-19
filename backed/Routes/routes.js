import express from "express";
import { registerUser } from "../Controlls/userController";
import { addConference, getConferences } from "../Controlls/conferenceController";
import { addFeedback } from "../Controlls/feedbackController";

const router=express.Router();
router.post("/register",registerUser);
router.post("/conference",addConference);
router.get("/conferences",getConferences);
router.post("/feedback",addFeedback);

export default router;