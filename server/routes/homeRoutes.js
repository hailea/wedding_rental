const express = require('express');
const app = express();

const router =express.Router();

//importing all controller modules
const homepageController = require("../controllers/homeController")
const carController = require("../controllers/carController");
const cateringController = require("../controllers/cateringController");
const venueController = require("../controllers/venueController");
const professionalsController = require("../controllers/professionalsController");
const newItemController = require("../controllers/newitemController");
const contactController = require("../controllers/contactController");
const postController = require("../controllers/postController");
const detailsController = require("../controllers/detailsController");

//Getting Data
router.get("/",homepageController);
router.get("/cars",carController);
router.get("/catering",cateringController);
router.get("/venue",venueController);
router.get("/professionals",professionalsController);
router.get("/newitem",newItemController);
router.get("/contact",contactController);

//Posting Data
router.post("/",postController);

//Getting one Data, Patching and Deleting items
//Get the details of an item
router.get("/:id", detailsController);

module.exports = router;