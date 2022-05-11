const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  businessName: {
    type: String,
  },
businessType:{
  type:String,
},
price:{
  type:Number,
  
},
phone:{
  type:String,
 
},
email:{
  type:String,

},
services:{
  type:String,

},
description:{
  type:String,
 
},

businessInstagramPage:{
  type:String,
 
},
businessFacebookPage:{
  type:String,
 
  
},
businessYouTubePage:{
  type:String,

  
},
businessTwitterPage:{
  type:String,
 
  
},
businessTiktokPage:{
  type:String,
 
  
},
mainImage:{
  type:String,
  default:"https://photos.app.goo.gl/mvGhsgMCihqyHmeBA",

},
serviceImage:{
  type:String,
  default:"https://i.pinimg.com/originals/37/66/ab/3766ab64d15a6396c5521dcb25cfa3e9.jpg",
  
},
descriptionImage:{
  type:String,
  default:"https://photos.app.goo.gl/swWpfiRWKpbnJxbD7",
  
},

streetAddress:{
  type:String,
 
},
city:{
  type:String,
 
},
state:{
  type:String,
 
},
country:{
  type:String,
 
},
zipcode:{
  type:Number,

},
availability:{
  type:Boolean,
  default:true,
},
stars:{
  type:String,
  default:"*****",
},

})

module.exports = mongoose.model("Rental", carSchema);




// const carSchema = mongoose.Schema({
//   businessName: {
//     type: String,
//     required: true,
//     default: "Model Default Car Rental Company",
//   },
//   mainImage: {
//     type: String,
//     required: true,
//     default: "https://picsum.photos/200",
//   },
//   businessType: {
//     type: String,
//     required: true,
//     default: "Venue",
//   },
//   features: {
//     type: [String],
//     required: true,
//     default: ["Air conditioning", "Decoration based on customers need", "Basic necessities"],
//   },
//   availability: {
//     type: String,
//     default: false,
//   },
//   description: {
//     type: String,
//   },
//   CreatedAt: {
//     type: Date,
//     default: new Date()
//   },
//   internalSideImages: {
//     type: String,
//     default: "https://picsum.photos/400",
//   },
//   externalSideImages: {
//     type: String,
//     default: "https://picsum.photos/800",
//   },
//   prices: {
//     type: String,
//   },
//   streetAddress: {
//     type:String,
//     default:"312 Main St."
//   },
//   city: {
//     type: String,
//     required: true,
//     default:"Baltimore"
//   },
//   state: {
//     type: String,
//     required: true,
//     default:"Maryland"
//   },
//   emailAddress: {
//     type: String,
//     required: true,
//     default:"tani@mail.com"
//   },
//   telephoneNumber: {
//     type: String,
//     required: true,
//     default:"(234) 635 3425"
//   },
//   zipCode: {
//     type:Number,
//     default:"21222"}
// });

// module.exports = mongoose.model("Car", carSchema);

//mongoose.connect(process.env.DB, () => console.log("DB Connected to Cars DB"));
// const addressSchema = mongoose.Schema({
// streetAddress:String,
// city:{
//     type: String,
//     required:true,
//   },
// state:{
//     type: String,
//     required:true,
//   },
// zipCode:Number
// })

