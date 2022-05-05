const CarModel = require("../models/CarSchema");

const posts = async (req, res) => {
  const car = new CarModel({
    businessName: req.body.businessName,
    mainImage: req.body.mainImage,
    businessType: req.body.businessType,
    features: req.body.features,
    availability: req.body.availability,
    description:req.body.description,
    internalSideImages: req.body.internalSideImages,
    externalSideImages: req.body.externalSideImages,
    prices: req.body.prices,
    streetAddress:req.body.streetAddress,
    city:req.body.city,
    state:req.body.state,
    zipCode:req.body.zipCode
  });
  try {
    const savedCar = await car.save();
    console.log(savedCar);
    res.json(savedCar);
 //   res.render('newitem');
  } catch (err) {
    console.log("Error", err);
    res.json({ message: err });
  }
};

module.exports = posts;
