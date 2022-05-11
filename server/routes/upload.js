// const express = require('express');
// const upload = require("../../middleware/upload");
// const router = express.Router();

// router.post("/upload",upload.single("file"),(req,res)=>{
//     if(req.file === undefined ) return res.send("You must select an image to upload");
//     const imageURL = `http://localhost:3030/file/${req.file.filename}`;
//     return res.send(imageURL);

// });

// module.exports = router;