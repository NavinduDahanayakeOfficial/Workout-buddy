const Workout = require("../models/workoutModels");
const mongoose = require("mongoose");

//get all workouts
const getWorkouts = async (req, res) => {
   const workouts = await Workout.find({}).sort({ createdAt: -1 });

   res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" }); //we return here because if the condition is met we don't need to carry out the code
   }

   const workout = await Workout.findById(id);

   if (!workout) {
      return res.status(404).json({ error: "No such workout" });
   }

   res.status(200).json(workout);
};

//create a new workout
const createWorkout = async (req, res) => {
   const { title, reps, load } = req.body;

   //add doc to db
   try {
      const workout = await Workout.create({
         title,
         reps,
         load,
      });
      res.status(200).json(workout);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

//delete a workout
const deleteWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
   }

   const workout = await Workout.findOneAndDelete({ _id: id });

   if (!workout) {
      return res.status(404).json({ error: "No such workout" });
   }

   res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
   }

   const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
         ...req.body, //spread the properties of the request body, so that will converted to an object
      }
   );

   if (!workout) {
      return res.status(404).json({ error: "No such workout" });
   }
   res.status(200).json(workout);
};

module.exports = {
   getWorkouts,
   getWorkout,
   createWorkout,
   deleteWorkout,
   updateWorkout,
};