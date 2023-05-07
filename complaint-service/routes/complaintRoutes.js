import express from "express";
const router = express.Router();

import {
  addComplaint,
  getAllComplaints,
} from "../controllers/complaintController.js";

//get all complaints
router.get("/", getAllComplaints);

//add complaint
router.post("/", addComplaint);

export default router;
