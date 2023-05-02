import express from "express";
const router = express.Router();

import {
  addVehicleController,
  getAllVehiclesController,
  getVehicleByIdController,
  getVehicleByRegNoController,
  updateVehicleController,
  deleteVehicleController,
} from "../controllers/vehicleController.js";
import upload from "../config/multer.js";

//get all vehicles
router.get("/", getAllVehiclesController);

//get vehicle by _id
router.get("/search_id/:id", getVehicleByIdController);

//get vehicle by vehicleId
router.get("/searchReg/:id", getVehicleByRegNoController);

//add vehicle details to the database
router.post("/", upload.single("file"), addVehicleController);
//router.post("/", addVehicleController);
//update vehicle details
router.patch("/:id", updateVehicleController);

//delete vehicle details
router.delete("/:id", deleteVehicleController);

export default router;
