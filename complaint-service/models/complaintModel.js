import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    complaintID: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["car crash", "bike crash", "crime", "other", "theft", "missing"],
    },
    description: {
      type: String,
      required: true,
    },
    evidence: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Processing", "Resolved"],
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
