import express from "express";
const router = express.Router();

import {
  addComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
} from "../controllers/complaintController.js";

//get all complaints
router.get("/", getAllComplaints);

//add complaint
router.post("/", addComplaint);

//get a complaint by id
router.get("/:id", getComplaintById);

//update a complaint
router.patch("/:id", updateComplaint);

export default router;
