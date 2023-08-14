//import mongoose
const mongoose = require("mongoose");


//Handler of Router
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",//This is reference to the like model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",//This is reference to the comment model
    }]
});




//export
module.exports = mongoose.model("Post", postSchema);