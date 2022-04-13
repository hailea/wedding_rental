const items = {
    title: "New Items",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const newItem =async (req,res) => {
    const {title, owner} = items;
    res.render('newitem', {title,owner});
}
 
module.exports = newItem;