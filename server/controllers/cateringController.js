const CateringModel = require("../models/CarSchema");

const catering = async (req, res) => {
  try {
    const title = "Catering Services";
    const items = await CateringModel.find({businessType:"Catering Services"});
    res.render("card", { items, title });
  } catch (err) {
    console.log("Error: Catering", err);
  }
};
 
module.exports = catering;