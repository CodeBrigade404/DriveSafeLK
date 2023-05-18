import express from "express";
const router = express.Router();

import {
  addComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  getComplaintByNIC,
  updateReply,
} from "../controllers/complaintController.js";

//get all complaints
router.get("/", getAllComplaints);

//add complaint
router.post("/", addComplaint);

//get a complaint by id
router.get("/:id", getComplaintById);

//get a complaint by nic
router.get("/nic/:nic", getComplaintByNIC);

//update a complaint
router.patch("/:id", updateComplaint);

//update complaint reply
router.patch("/reply/:id", updateReply);

export default router;
