const CarModel = require("../models/CarSchema");

const cars = async (req, res) => {
  try {
    const title = "Limousine and Traditional Wedding Car Renters";
    const items = await CarModel.find({businessType:"car"}); //.sort({createdAt: 1});
    res.render("card", { items, title });
  } catch (err) {
    console.log("Error: Car", err);
    
  }
};

module.exports = cars;
