const express = require("express"); //require express package
const {
   getWorkouts,
   getWorkout,
   createWorkout,
   deleteWorkout,
   updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router(); //create a instance of router

//attach a handler to that
//this is to GET all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router; //export the router
