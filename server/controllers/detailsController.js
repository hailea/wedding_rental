const Details = require("../models/CarSchema");

const details = async (req, res) => {
    try {
        const { id } = req.params;
        const selectedItem = await Details.find({ _id: id });
        const item = selectedItem[0];
        console.log(item);
        res.render("details",{item});
      } catch (err) {
        console.log(err.message, err);
      }
};
module.exports = details;
