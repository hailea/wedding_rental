// // require("dotenv").config();
// // const util = require("util");
// // const multer = require('multer');
// // const { GridFsStorage } = require('multer-gridfs-storage');
// // const gridStream = require('gridfs-stream');

// // var storage = new GridFsStorage({
// //     url: process.env.DB,
// //     options: { useNewUrlParser: true, useUnifiedTopology: true },
// //     file: (req, file) => {
// //       const match = ["image/png", "image/jpeg"];
// //       if (match.indexOf(file.mimetype) === -1) {
// //         const filename = `${Date.now()}-utopia-${file.originalname}`;
// //         return filename;
// //       }
// //       return {
// //         bucketName: dbConfig.imgBucket,
// //         filename: `${Date.now()}-utopia-${file.originalname}`
// //       };
// //     }
// //   });
// //   var uploadFiles = multer({ storage: storage }).single("file");
// //   var uploadFilesMiddleware = util.promisify(uploadFiles);
// //   module.exports = uploadFilesMiddleware;

// // // const storage = new gridfsStorage({
// // //     url:process.env.DB,
// // //     options:{useNewUrlParser: true, useUnifiedTopology: true},
// // //     file:(req,file)=>{
// // //         const match = ["image/jpeg", "image/png"];
// // //         if(match.indexOf(mimetype) === -1){
// // //             const filename = `${Date.now()}-any-name-${file.originalName}`;
// // //             return filename;
// // //         }
// // //         return{
// // //             bucketname:photos,
// // //             filename:`${Date.now()}-any-name-${file.originalName}`
// // //         }
// // //     }

// // // });
// // // module.exports = multer({storage})