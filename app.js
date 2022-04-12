//add dependencies 
require("dotenv").config();
const express =require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
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

app.use("/",routes);



const PORT = parseInt(process.env.PORT) || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})
