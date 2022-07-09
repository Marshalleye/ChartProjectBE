import express from "express";
import mongoose from "mongoose";
import postRouter from "./postAPI/PostRouter.js";
import fileUpload from "express-fileupload";
import chartRouter from "./chartAPI/ChartRouter.js";

const PORT = 5000;
const DB_URL =
   "mongodb+srv://MarshallAdmin:ChartAdmin@cluster0.7jpgpld.mongodb.net/?retryWrites=true&w=majority";

const app = express();

//log - MarshallAdmin , nazar
//pass - ChartAdmin , chart2021

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', postRouter);
app.use('/api', chartRouter);
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});

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
