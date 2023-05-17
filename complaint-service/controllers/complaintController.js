import Complaint from '../models/complaintModel.js';
import asyncHandler from 'express-async-handler';

//add a complaint
export const addComplaint = asyncHandler(async (req, res) => {
  const { nic, name, category, description, evidence, status } = req.body;

  try {
    // Generate the complaintID
    const count = await Complaint.countDocuments({});
    const complaintID = `CI${String(count + 1).padStart(5, '0')}`;

    // Create the new complaint document
    const complaint = await Complaint.create({
      complaintID,
      nic,
      name,
      category,
      description,
      evidence,
      status: 'Processing',
    });

    res.status(201).json({
      status: 'success',
      data: {
        complaint,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
});

//get all complaints
export const getAllComplaints = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find();

  res.status(200).json(complaint);
});

//get a complaint by id
export const getComplaintById = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);

  if (complaint) {
    res.status(200).json(complaint);
  } else {
    res.status(404).json({
      message: 'Complaint not found',
    });
  }
});

//update a status
export const updateComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);

  if (complaint) {
    complaint.status = req.body.status || complaint.status;

    const updatedComplaint = await complaint.save();

    res.status(200).json({
      status: 'success',
      data: {
        updatedComplaint,
      },
    });
  } else {
    res.status(404).json({
      message: 'Complaint not found',
    });
  }
});

export const getComplaintByNIC = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find({ nic: req.params.nic });

  if (complaint) {
    res.status(200).json(complaint);
  } else {
    res.status(404).json({
      message: 'Complaint not found',
    });
  }
});
