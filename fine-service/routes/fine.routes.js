const express = require("express");
const router = express.Router();
const CitizenFines = require("../models/fine.model");
const shortid = require("shortid");

/*Get all details */
router.get("/", async (req, res) => {
  try {
    const fines = await CitizenFines.find();
    res.json(fines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/addfine", async (req, res) => {
  try {
    const { citizenNIC, citizenName, fineAmount, fineContent, fineEvidence, statusOfPaid } =
      req.body;

    // Generate unique random code for fineId
    const fineId = shortid.generate();

    // Find the CitizenFines document with the given citizenNIC
    let citizenFines = await CitizenFines.findOne({ citizenNIC });

    if (!citizenFines) {
      // If the CitizenFines document does not exist, create a new one
      citizenFines = new CitizenFines({
        citizenNIC,
        citizenName,
        finesOfCitizens: [{ fineId, fineAmount, fineContent, fineEvidence, statusOfPaid }],
      });
    } else {
      // If the CitizenFines document already exists, add a new fine to the existing document
      citizenFines.finesOfCitizens.push({
        fineId,
        fineAmount,
        fineContent,
        fineEvidence,
        statusOfPaid,
      });
    }

    // Save the document to the database
    await citizenFines.save();

    res.status(201).json({ message: "Citizen fine added successfully" });
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
      { citizenName, finesOfCitizens }, // Update citizenName and finesOfCitizens directly
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

router.delete("/fines/:fineId", async (req, res) => {
  const { fineId } = req.params;

  try {
    const citizen = await CitizenFines.findOneAndUpdate(
      { "finesOfCitizens.fineId": fineId },
      { $pull: { finesOfCitizens: { fineId: fineId } } },
      { new: true }
    );

    if (!citizen) {
      return res.status(404).json({ error: "Fine not found" });
    }

    res.json({ message: "Fine deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;