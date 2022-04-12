const express = require('express');
const router =express.Router();
const homepageController = require("../controllers/homeController")

router.get("/",homepageController);

module.exports = router;