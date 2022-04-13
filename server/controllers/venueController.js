const items = {
    title: "Venue Services",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const venue =async (req,res) => {
    const {title, owner} = items;
    res.render('venue', {title,owner});
}
 
module.exports = venue;