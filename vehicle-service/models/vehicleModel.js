import mongoose from "mongoose";

const vehicleScheme = new mongoose.Schema(
  {
    regno: {
      type: String,
      required: [true, "Register Number can't be blank"],
      unique: true,
    },
    chassisNo: {
      type: String,
      required: [true, "Chassis Number can't be blank"],
      unique: true,
    },
    vehicleType: {
      type: String,
      enum: {
        values: ["car", "bike", "bus", "truck", "van", "jeep", , "other"],
        message:
          'Vehicle Type must be either "car", "bike", "bus", "truck", "van", "jeep" or "other"',
      },
    },
    color: {
      type: String,
    },
    vehicleModel: {
      type: String,
      required: [true, " vehicle Model can't be blank"],
    },
    yearOfManufacture: {
      type: Number,
      required: [true, " year Of Manufacture can't be blank"],
    },
    vehicleOwners: {
      type: String,
      required: [true, " vehicle Owners can't be blank"],
    },
    status: {
      type: String,
      enum: {
        values: ["stolen", "missing", "fine"],
        message: 'Status must be either "stolen" ot "missing" or "fine"',
      },
      required: [true, "Status can't be blank"],
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleScheme);

export default Vehicle;
