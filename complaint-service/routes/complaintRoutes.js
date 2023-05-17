import express from 'express';
const router = express.Router();

import {
  addComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  getComplaintByNIC,
} from '../controllers/complaintController.js';

//get all complaints
router.get('/', getAllComplaints);

//add complaint
router.post('/', addComplaint);

//get a complaint by id
router.get('/:id', getComplaintById);

router.get('/nic/:nic', getComplaintByNIC);

//update a complaint
router.patch('/:id', updateComplaint);

export default router;
