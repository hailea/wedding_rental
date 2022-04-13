const items = {
    title: "All Wedding Equipments",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const homepage =async (req,res) => {
    const {title, owner} = items;
    res.render('index', {title,owner});
}
 
module.exports = homepage;