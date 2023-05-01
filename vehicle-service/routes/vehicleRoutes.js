import express from "express";
const router = express.Router();

import { addVehicleController } from "../controllers/vehicleController.js";
import upload from "../config/multer.js";
//get all vehicles
router.get("/", (req, res) => {
  res.send("get all vehicles");
});

//get vehicle by _id
router.get("/search_id/:id", (req, res) => {
  res.send("get vehicle by _id");
});

//get vehicle by vehicleId
router.get("/searchReg/:id", (req, res) => {
  res.send("get vehicle by vehicleId");
});

//add vehicle details to the database
router.post("/", upload.single("file"), addVehicleController);
//router.post("/", addVehicleController);
//update vehicle details
router.patch("/", (req, res) => {
  res.send("update vehicle details");
});

//delete vehicle details
router.delete("/", (req, res) => {
  res.send("delete vehicle details");
});

export default router;
