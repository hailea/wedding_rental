const VenueModel = require("../models/CarSchema");

const venue = async (req, res) => {
  try {
    const title = "Wedding Venues/Hall Providers";
    const items = await VenueModel.find({businessType:"Wedding Venue Rental"});
    res.render("card", { items, title });
  } catch (err) {
    console.log("Error: Venue", err);
  }
};
module.exports = venue;

