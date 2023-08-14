const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type : String,
        required :true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    },

});

//post middleware
fileSchema.post("save",async function(doc) {
    try{

        console.log("Doc",doc);

        //transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER, 
              pass: process.env.MAIL_PASS, 
            },
          });


          //Send mail
          let info = await transporter.sendMail({
            from: "Himanshi" , 
            to: doc.email, 
            subject: "New File uploaded on cloudinary",
            html: `<h2>Hello</h2> <p>File Uploaded</p> view here <a href="${doc.imageUrl}">${doc.imageUrl}</a>`, 
          });

          console.log("INFO",info);

    }catch(error){
        console.error(error);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;