const router = require("express").Router();
const Passenger = require("../models/passenger");
const Airline = require("../models/airline");

//read passenger
router.get("/passenger/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    Passenger.find({ _id: req.params.id })
      .populate("airline")
      .exec((error, passenger) => {
        if (error) return res.status(400).json({ error });

        if (passenger) {
          return res.status(200).json({ passenger });
        }
      });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// create passenger
router.post("/passenger", async (req, res) => {
  const { name, trips, airline } = req.body;

  const newPassenger = new Passenger({
    name,
    trips,
    airline,
  });

  try {
    const passenger = await newPassenger.save();
    res.status(201).json({ passenger });
  } catch (err) {
    res.status(500).json(err);
  }
});

// update passenger name
router.patch("/passenger/:id", async (req, res) => {
  const passenger = {
    name: req.body.name,
  };
  console.log(passenger);
  try {
    const updatedPassenger = await Passenger.findOneAndUpdate(
      { _id: req.params.id },
      passenger,
      { new: true }
    );
    res.status(201).json({ updatedPassenger });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// update whole passenger
router.put("/passenger/:id", async (req, res) => {
  const { name, trips, airline } = req.body;

  const passenger = {
    name,
    trips,
    airline,
  };
  console.log(passenger);
  try {
    const updatedPassenger = await Passenger.findOneAndUpdate(
      { _id: req.params.id },
      passenger,
      { new: true }
    );
    res.status(201).json({ updatedPassenger });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// delete passenger
router.delete("/passenger/:id", async (req, res) => {
  try {
    const deletePassenger = await Passenger.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(201).json({ message: "Passenger data deleted successfully." });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
