const HomeModel = require("../models/CarSchema");

const homepage = async (req, res) => {
  try {
    const title = "Newest Professionals and Service Providers";
    const items = await HomeModel.find().sort({businessType:-1});
    console.log(items);
    res.render("index", { items,title });
  } catch (err) {
    console.log("Error: Professionals", err);
  }
};
 
module.exports = homepage;