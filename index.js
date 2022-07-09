import express from "express";
import mongoose from "mongoose";
import postRouter from "./postAPI/PostRouter.js";
import fileUpload from "express-fileupload";
import chartRouter from "./chartAPI/ChartRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const PORT = process.env.PORT || 5000;
const DB_URL =
   "mongodb+srv://MarshallAdmin:ChartAdmin@cluster0.7jpgpld.mongodb.net/?retryWrites=true&w=majority";

const app = express();

//log - MarshallAdmin , nazar
//pass - ChartAdmin , chart2021

app.use(express.json());
app.use(express.static('static'));
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({}));
app.use('/api', postRouter);
app.use('/api', chartRouter);

async function startApp() {
   try {
      await mongoose.connect(DB_URL, {
         useUnifiedTopology: true, useNewUrlParser: true
      })
      app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
   } catch (err) {
      console.log(err)
   }
}

startApp();
