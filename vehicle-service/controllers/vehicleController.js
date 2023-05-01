import csv from "csvtojson";
import fs from "fs";
import Vehicle from "../models/vehicleModel.js";
import asyncHandler from "express-async-handler";
//add a vehicle to the database
export const addVehicleController1 = asyncHandler(async (req, res) => {
  const {
    regno,
    chassisNo,
    vehicleType,
    color,
    vehicleModel,
    yearOfManufacture,
    vehicleOwners,
    status,
  } = req.body;

  try {
    const vehicle = await Vehicle.create({
      regno,
      chassisNo,
      vehicleType,
      color,
      vehicleModel,
      yearOfManufacture,
      vehicleOwners,
      status,
    });

    res.status(201).json({
      status: "success",
      data: {
        vehicle,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

//add a vehicle to the database from a CSV file
export const addVehicleController = asyncHandler(async (req, res) => {
  const jsonArray = await csv().fromFile(req.file.path);
  try {
    const result = await Vehicle.insertMany(jsonArray);
  } catch (err) {
    throw new Error(err);
  }
  // if (!result) {
  //   return res.status(500).send("Could not add data to the database");
  // }

  // remove the file after processing
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${req.file.filename} has been removed`);
  });

  res.json(jsonArray);
});
