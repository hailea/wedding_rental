const items = {
    title: "Tameu Car Rentals",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const cars =async (req,res) => {
    const {title, owner} = items;
    res.render('cars', {title,owner});
}
 
module.exports = cars;