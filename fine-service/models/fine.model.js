const mongoose = require("mongoose");

const citizenFineSchema = new mongoose.Schema({
  citizenNIC: {
    type: String,
    required: true,
    unique: true,
  },
  citizenName: {
    type: String,
    required: true,
  },
  finesOfCitizens: [
    {
      fineId: {
        type: String,
        unique: true,
        required: true,
      },
      fineAmount: {
        type: Number,
        required: true,
      },
      fineDate: {
        type: Date,
        required: true,
        default: Date.now,
      },
      fineContent: {
        type: String,
      },
      fineEvidence: {
        type: String,
      },
      statusOfPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

const CitizenFines = mongoose.model("CitizenFines", citizenFineSchema);

module.exports = CitizenFines;
