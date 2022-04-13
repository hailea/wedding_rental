const express = require('express');
const router =express.Router();
const homepageController = require("../controllers/homeController")
const carController = require("../controllers/carController");
const cateringController = require("../controllers/cateringController");
const venueController = require("../controllers/venueController");
const professionalsController = require("../controllers/professionalsController");
const newItemController = require("../controllers/newitemController");
const contactController = require("../controllers/contactController");

router.get("/",homepageController);
router.get("/cars",carController);
router.get("/catering",cateringController);
router.get("/venue",venueController);
router.get("/professionals",professionalsController);
router.get("/newitem",newItemController);
router.get("/contact",contactController);

module.exports = router;