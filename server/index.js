import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/posts",postoutes)




//mongodb connection
mongoose.connect(
  "mongodb://localhost:27017/Memories",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).
then( () => {
    const port = process.env.PORT || 6000;
    
    app.listen(port, () => `Server running on port ${port} 🔥`);
    console.log(`Server running on port ${port} 🔥`);
    console.log('database connection success');
})
.catch( (error) => { console.log(error.message)})

