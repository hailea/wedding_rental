const CarModel = require("../models/CarSchema");

const posts = async (req, res) => {
  const car = new CarModel({
    businessName: req.body.businessName,
    businessType: req.body.businessType,
    price: req.body.price,
    phone: req.body.phone,
    email: req.body.email,
    services: req.body.services,
    description: req.body.description,
    
    businessInstagramPage: req.body.businessInstagramPage,
    businessFacebookPage: req.body.businessFacebookPage,
    businessYouTubePage: req.body.businessYouTubePage,
    businessTwitterPage: req.body.businessTwitterPage,
    businessTiktokPage: req.body.businessTiktokPage,
    
    mainImage: req.body.mainImage,
    serviceImage: req.body.serviceImage,
    descriptionImage: req.body.descriptionImage,
    
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    zipcode: req.body.zipcode
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
