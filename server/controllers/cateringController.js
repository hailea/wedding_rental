const items = {
    title: "Catering Services",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const catering =async (req,res) => {
    const {title, owner} = items;
    res.render('catering', {title,owner});
}
 
module.exports = catering;