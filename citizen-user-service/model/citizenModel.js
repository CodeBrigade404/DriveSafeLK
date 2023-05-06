import mongoose from "mongoose";
const { Schema } = mongoose;

const citizenSchema = new Schema({
  firstname: {
    type: String,
    maxlength: 15,
    required: [true, "First name is required"],
  },
  middleName: {
    type: String,
    maxlength: 12,
    required: false,
  },
  lastName: {
    type: String,
    maxlength: 50,
    required: [true, "Last name is required"],
  },
  nic: {
    type: String,
    maxlength: 50,
    unique: true,
    sparse: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  address: {
    type: String,
    maxlength: 50,
    required: true,
  },
  mobileNo: {
    type: String,
    maxlength: 50,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  ownvehicle: [
    {
      registrationNo: {
        type: String,
        maxlength: 50,
        required: true,
      },
    },
  ],
  driveType: [
    {
      name: {
        type: String,
        maxlength: 50,
        required: false,
      },
    },
  ],
  mariageStatus: {
    type: String,
    enum: ["Single", "Married", "Divorced", "Widowed"],
    required: true,
  },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return new Date(v) < new Date();
      },
      message: (props) => `${props.value} is not a valid date of birth!`,
    },
  },
});

export default mongoose.model("Citizen", citizenSchema);
