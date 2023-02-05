import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutFrom from "../components/WorkoutForm";

const Home = () => {
   const { workouts, dispatch } = useWorkoutsContext();

   useEffect(() => {
      const fetchWorkout = async () => {
         const response = await fetch("/api/workouts/");
         const json = await response.json();

         if (response.ok) {
            dispatch({ type: "SET_WORKOUTS", payload: json });
         }
      };

      fetchWorkout();
   }, [dispatch]);

   return (
      <div className="home">
         <div className="workouts">
            {workouts &&
               workouts.map((workout) => (
                  <WorkoutDetails key={workout._id} workout={workout} />
               ))}
         </div>
         {/* here we use normal parentheses since we return a template */}

         <div>{<WorkoutFrom />}</div>
      </div>
   );
};

export default Home;
