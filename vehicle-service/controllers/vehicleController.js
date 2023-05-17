import csv from "csvtojson";
import fs from "fs";
import Vehicle from "../models/vehicleModel.js";
import asyncHandler from "express-async-handler";
//add a vehicle to the database
export const addVehicleControllerByHand = asyncHandler(async (req, res) => {
  const {
    regNo,
    chassiNo,
    vehicleType,
    color,
    vehicleModel,
    yearOfManufacture,
    owners,
    status,
  } = req.body;

  console.log(
    regNo,
    chassiNo,
    vehicleType,
    color,
    vehicleModel,
    yearOfManufacture,
    owners,
    status
  );
  try {
    const vehicle = await Vehicle.create({
      regNo: regNo,
      chassiNo: chassiNo,
      vehicleType,
      color,
      vehicleModel,
      yearOfManufacture,
      vehicleOwners: owners,
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
  const vehicles = jsonArray.map((item) => ({
    ...item,
    vehicleOwners: item.vehicleOwners.split(","),
  }));
  try {
    const result = await Vehicle.insertMany(vehicles);
    console.log(vehicles);
  } catch (err) {
    throw new Error(err);
  }

  // remove the file after processing
  fs.unlink(req.file.path, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log(`File ${req.file.filename} has been removed`);
  });

  res.json(jsonArray);
});

//get all vehicles from the database
export const getAllVehiclesController = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find();

  res.status(200).json(vehicles);
});

//get vehicle by _id
export const getVehicleByIdController = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    res.status(200).json(vehicle);
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

//get vehicle by vehicleId
export const getVehicleByRegNoController = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findOne({ regNo: req.params.id });

  if (vehicle) {
    res.status(200).json(vehicle);
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

//update vehicle details
export const updateVehicleController = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    vehicle.regNo = req.body.regNo || vehicle.regNo;
    vehicle.chassisNo = req.body.chassisNo || vehicle.chassisNo;
    vehicle.vehicleType = req.body.vehicleType || vehicle.vehicleType;
    vehicle.color = req.body.color || vehicle.color;
    vehicle.vehicleModel = req.body.vehicleModel || vehicle.vehicleModel;
    vehicle.yearOfManufacture =
      req.body.yearOfManufacture || vehicle.yearOfManufacture;
    vehicle.vehicleOwners = req.body.vehicleOwners || vehicle.vehicleOwners;
    vehicle.status = req.body.status || vehicle.status;

    const updatedVehicle = await vehicle.save();
    res.json({
      _id: updatedVehicle._id,
      regNo: updatedVehicle.regNo,
      chassisNo: updatedVehicle.chassisNo,
      vehicleType: updatedVehicle.vehicleType,
      color: updatedVehicle.color,
      vehicleModel: updatedVehicle.vehicleModel,
      yearOfManufacture: updatedVehicle.yearOfManufacture,
      vehicleOwners: updatedVehicle.vehicleOwners,
      status: updatedVehicle.status,
    });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

//delete vehicle details
export const deleteVehicleController = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    await vehicle.deleteOne();
    res.json({ message: "Vehicle removed" });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

//search vehicle by NIC
export const searchVehicleByOwnerName = asyncHandler(async (req, res) => {
  const NIC = req.params.nic;

  if (!NIC) {
    res.status(400);
    throw new Error("Owner name is missing");
  }

  const vehicles = await Vehicle.find({
    vehicleOwners: { $regex: NIC.toString(), $options: "i" },
  });

  if (vehicles) {
    res.status(200).json(vehicles);
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});
