const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema define the structure of the document that we save to workout collection
const workoutSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      reps: {
         type: Number,
         required: true,
      },
      load: {
         type: Number,
         required: true,
      },
   },
   { timestamps: true } //adds when the document is created
);

//we make a model base on schema to apply that schema to a particular model and we use that model to interact with a collection
module.exports = mongoose.model("Workout", workoutSchema);

// Workout.find(); //find all of the workouts within workout collection
