//App create
const express = require("express");
const app = express();

//Port Find
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Middleware adding
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir :'/tmp/'
}));

//DB se connect
const db = require("./config/database");
db.connect();

//Connect with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//Api route Mount
const upload = require("./routes/FileUploader");
app.use('/api/v1/upload',upload)


//Activate Server
app.listen(PORT,() => {
    console.log(`App is started on port ${PORT}`);
})


