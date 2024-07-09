const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, ("./uploads") );  // ->("./uploads")  this is the destination where files will save in the HArdDisk Storage 
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });

//   const upload = multer({ storage :storage }); OR
  const upload = multer({ storage });

  module.exports = upload;
  
// memoryStorage() vs diskStorage() ? : {    
// const storage = multer.memoryStorage(); // It open the image in the Ram temporarily --> Not save permanently -> good for croping , editing , and making change in the  file Function without saving the copy permanently 
//we use memoryStorage if we don't need to save the image permanently and for future use
//In our case we have to use the disk storage to save the images permanently for the future use
//}