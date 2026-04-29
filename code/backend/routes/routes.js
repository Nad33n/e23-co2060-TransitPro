const express = require("express");
const router = express.Router();
const Route = require("../models/Route");


// ================= GET ALL ROUTES =================
router.get("/", async (req, res) => {
  try {
    const routes = await Route.find().sort({ createdAt: -1 });
    res.json(routes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ================= ADD NEW ROUTE =================
router.post("/", async (req, res) => {
  try {
    const { from, to, price } = req.body;

    if (!from || !to || !price) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newRoute = new Route({
      from,
      to,
      price
    });

    await newRoute.save();

    res.status(201).json(newRoute);
  } catch (err) {
    console.log("POST ROUTE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// ================= UPDATE ROUTE =================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Route.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ================= DELETE ROUTE =================
router.delete("/:id", async (req, res) => {
  try {
    await Route.findByIdAndDelete(req.params.id);
    res.json({ message: "Route deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
