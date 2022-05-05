//add dependencies 
require("dotenv").config();
const express =require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//middlewares
// helps to accept data from the users
app.use(express.urlencoded({ extended: true}));
// storage for static datas
app.use(express.static('public'));
//layouts
app.use(expressLayouts);

//setting name to a value 
app.set('layout', "./layouts/main");
app.set("view engine", 'ejs');
const routes = require("./server/routes/homeRoutes");

//middlewares
app.use(bodyParser.json());

//routes
app.use("/",routes);

//Port
const PORT = parseInt(process.env.PORT) || 5000;

//Connect the database with the application

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Database is connected!");
    // add this inside your route
//if( !mongoose.Types.ObjectId.isValid(id) ) return false;
  })
  .catch(err => console.log(err));


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})
