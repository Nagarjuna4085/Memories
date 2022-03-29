import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tages:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        defailt:0
    },
    createAt:{
        type:Date,
        default: new Date()
    }
});

const postMessage = mongoose.model("PostMessgae",postSchema);
module.exports = postMessage


