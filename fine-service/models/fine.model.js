const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema({
  citizen: {
    type: String,
    required: true,
  },
  officer: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  fineAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  datePaid: {
    type: Date,
    required: false,
  },
  evidence: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Fine", fineSchema);
