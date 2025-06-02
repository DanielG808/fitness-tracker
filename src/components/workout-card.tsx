"use client";

import { Workout } from "@/lib/validations/workoutSchema";
import WorkoutDetails from "./workout-details";
import XButton from "./x-button";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const { id, title, duration, exerciseList } = workout;

  async function handleDelete() {
    console.log(id);
    try {
      const response = await fetch(`/api/workouts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log(response);
    } catch (error) {
      console.error("Failed to delete workout:", error);
    }
  }

  return (
    <li className="bg-white w-full md:w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-xl duration-300">
      <article className="flex justify-between items-center h-full w-full">
        <WorkoutDetails
          id={id}
          title={title}
          duration={duration}
          exerciseList={exerciseList}
        />
        <XButton onClick={() => handleDelete()} />
      </article>
    </li>
  );
}
