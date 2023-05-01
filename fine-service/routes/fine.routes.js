const express = require("express");
const router = express.Router();
const Fine = require("../models/fine.model");

// Get all fines
router.get("/", async (req, res) => {
    try {
        const fines = await Fine.find();
        res.json(fines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
);

// Get one fine
router.get("/:id", getFine, (req, res) => {
    res.json(res.fine);
});

// Create one fine
router.post("/", async (req, res) => {
    const fine = new Fine({
        citizen: req.body.citizen,
        officer: req.body.officer,
        content: req.body.content,
        fineAmount: req.body.fineAmount,
        status: req.body.status,
        datePaid: req.body.datePaid,
        evidence: req.body.evidence,
    });
    try {
        const newFine = await fine.save();
        res.status(201).json(newFine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one fine
router.patch("/:id", getFine, async (req, res) => {
    if (req.body.citizen != null) {
        res.fine.citizen = req.body.citizen;
    }
    if (req.body.officer != null) {
        res.fine.officer = req.body.officer;
    }
    if (req.body.content != null) {
        res.fine.content = req.body.content;
    }
    if (req.body.fineAmount != null) {
        res.fine.fineAmount = req.body.fineAmount;
    }
    if (req.body.status != null) {
        res.fine.status = req.body.status;
    }
    if (req.body.datePaid != null) {
        res.fine.datePaid = req.body.datePaid;
    }
    if (req.body.evidence != null) {
        res.fine.evidence = req.body.evidence;
    }
    try {
        const updatedFine = await res.fine.save();
        res.json(updatedFine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", getFine, async (req, res) => {
  try {
    await Fine.deleteOne({ _id: res.fine._id });
    res.json({ message: "Deleted fine" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getFine(req, res, next) {
  try {
    const fine = await Fine.findById(req.params.id);
    if (!fine) {
      return res.status(404).json({ message: "Fine not found" });
    }
    res.fine = fine;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = router;




