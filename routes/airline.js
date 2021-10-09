const router = require("express").Router();
const Airline = require("../models/airline");

//Read airline
router.get("/airlines", async (req, res) => {
  try {
    Airline.find({}).exec((error, airlines) => {
      if (error) return res.status(400).json({ error });

      if (airlines) {
        return res.status(200).json({ airlines });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//Read airline by id
 router.get("/airlines/:id", async (req, res) => {
     console.log(req.params.id);
     
       Airline.find({_id:req.params.id}).exec((error, airlines) => {
         if (error) return res.status(400).json({ error });
  
         if (airlines) {
           return res.status(200).json({ airlines });
         }
       });
     
     
   });
  

// Create airline
router.post("/airlines", async (req, res) => {
  console.log(req.body);
//   const {
//     id,
//     name,
//     country,
//     logo,
//     slogan,
//     head_quarters,
//     website,
//     established,
//   } = req.body;

  const newAirline = new Airline({
    id: req.body.id,
    name: req.body.name,
    country: req.body.country,
    logo: req.body.logo,
    slogan: req.body.slogan,
    head_quarters: req.body.head_quarters,
    website: req.body.website,
    established: req.body.established,
  });
  
  try {
    const airline = await newAirline.save();
    res.status(201).json({airline});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
