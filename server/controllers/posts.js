// import postMessage from "../models/postMessage";

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tages: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    defailt: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("PostMessgae", postSchema);


export const getPosts = async (req, res) => {
  try {
      const postMessages = await postMessage.find()

         res.status(404).json(postMessages);
  
  } catch (error) {
         res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
     const post = req.body;
       const newPost = new postMessage(post);
  try {
       await newPost.save()

         res.status(404).json(newPost);
      
  } catch (error) {
         res.status(404).json({ message: error.message });
      
  }
};