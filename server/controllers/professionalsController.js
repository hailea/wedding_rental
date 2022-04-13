const items = {
    title: "DJ's, Photography, Planners",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const professionals =async (req,res) => {
    const {title, owner} = items;
    res.render('professionals', {title,owner});
}
 
module.exports = professionals;