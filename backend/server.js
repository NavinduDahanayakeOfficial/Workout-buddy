require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts"); //require routers of workouts file

//creating a express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
});

//use workoutRoutes
app.use("/api/workouts", workoutRoutes); //when we fire a request to this path(/route) then use this workoutRoutes

//connect to db
mongoose
   .connect(process.env.MONG_URI)
   .then(() => {
      //listen for request
      app.listen(process.env.PORT, () => {
         console.log("Connected to db & listening on port", process.env.PORT);
      });
   })
   .catch((error) => {
      console.log(error);
   });
