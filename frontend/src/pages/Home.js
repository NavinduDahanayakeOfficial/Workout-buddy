import { useEffect } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutFrom from "../components/WorkoutForm";

const Home = () => {
   const [workouts, setWorkouts] = useState(null);

   useEffect(() => {
      const fetchWorkout = async () => {
         const response = await fetch("/api/workouts/");
         const json = await response.json();

         if (response.ok) {
            setWorkouts(json);
         }
      };

      fetchWorkout();
   }, []);

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
