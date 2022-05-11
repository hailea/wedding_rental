const HomeModel = require("../models/CarSchema");

const homepage = async (req, res) => {
  try {
    const title = "Wedding Equipment Rental Companies and Wedding Professionals";
    const items = await HomeModel.find().sort({businessType:-1});
    console.log(items);
    res.render("index", { items,title });
  } catch (err) {
    console.log("Error: Main Page", err);
  }
};
 
module.exports = homepage;