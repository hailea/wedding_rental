const items = {
    title: "Contact Form",
    owner: "Tefera Jamu",
    address:{
        street: "321 Main St",
        City: "Frankfurt"    
    }
}
const contact =async (req,res) => {
    const {title, owner} = items;
    res.render('contact', {title,owner});
}
 
module.exports = contact;