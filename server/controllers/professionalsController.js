const ProfessionalsModel = require("../models/CarSchema");

const professionals = async (req, res) => {
  try {
    const title = "List of Wedding Professionals";
    const items = await ProfessionalsModel.find({businessType:{$in:["photography","planner","dj"]}}).sort({businessType:1});
    console.log(items);
    res.render("card", { items,title });
  } catch (err) {
    console.log("Error: Professionals", err);
  }
};
module.exports = professionals;