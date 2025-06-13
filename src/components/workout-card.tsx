"use client";

import { Workout } from "@/lib/validations/workoutSchema";
import WorkoutDetails from "./workout-details";
import WorkoutCardControls from "./workout-card-controls";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  // const { id, title, duration, exerciseList } = workout;

  return (
    <li className="bg-white w-full md:w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-xl duration-300">
      <article className="flex justify-between items-center h-full w-full">
        <WorkoutDetails workout={workout} />
        <WorkoutCardControls workout={workout} />
      </article>
    </li>
  );
}
