const express = require("express");
const router = express.Router();
const CitizenFines = require("../models/fine.model");

/*Get all details */
router.get("/", async (req, res) => {
  try {
    const fines = await CitizenFines.find();
    res.json(fines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


/*Add Citizen with fines http://localhost:5000/driveSafe/payfine/ */
router.post("/", async (req, res) => {
  try {
    const { citizenNIC, citizenName, finesOfCitizens } = req.body;

    // create a new CitizenFines document
    const citizenFines = new CitizenFines({
      citizenNIC,
      citizenName,
      finesOfCitizens,
    });

    // save the document to the database
    await citizenFines.save();

    res.status(201).json({ message: "Citizen fines added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

/*This route works as when gives citizenNIC it will gives relevant all fine detail  Example: http://localhost:5000/driveSafe/payfine/123456789V*/
router.get("/:citizenNIC", async (req, res) => {
  try {
    const citizenFines = await CitizenFines.findOne({ citizenNIC: req.params.citizenNIC });

    if (!citizenFines) {
      return res.status(404).json({ message: "Citizen not found" });
    }

    res.status(200).json({ citizenFines });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});



/*This route works as when gives citizenNIC it will update the relevant all fine detail  Example: http://localhost:5000/driveSafe/payfine/123456789V*/
router.put("/:citizenNIC", async (req, res) => {
  try {
    const { citizenName, finesOfCitizens } = req.body;

    const citizenFines = await CitizenFines.findOneAndUpdate(
      { citizenNIC: req.params.citizenNIC },
      { $set: { citizenName, finesOfCitizens } },
      { new: true }
    );

    if (!citizenFines) {
      return res.status(404).json({ message: "Citizen not found" });
    }

    res.status(200).json({ message: "Citizen details updated successfully", citizenFines });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});




/*This route works as when gives citizenNIC and fineId it will delete the relevant fine detail  Example: http://localhost:5000/driveSafe/payfine/123456789V/fine/1*/

router.delete("/:citizenNIC/fine/:fineId", async (req, res) => {
  try {
    const { citizenNIC, fineId } = req.params;

    const citizenFines = await CitizenFines.findOneAndUpdate(
      { citizenNIC },
      { $pull: { finesOfCitizens: { fineId } } },
      { new: true }
    );

    if (!citizenFines) {
      return res.status(404).json({ message: "Citizen not found" });
    }

    res.status(200).json({ message: "Fine record deleted successfully", citizenFines });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});



module.exports = router;
