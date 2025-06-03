import { getAllWorkouts } from "@/app/api/workouts/controller";
import WorkoutCard from "./workout-card";

export default async function WorkoutsList() {
  const workouts = await getAllWorkouts();

  return (
    <div className="h-screen w-full overflow-y-auto">
      <ul className="flex flex-col items-center space-y-4 my-4 sm:m-10">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </ul>
    </div>
  );
}
