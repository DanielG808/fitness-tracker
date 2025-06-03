"use client";

import { Workout } from "@/lib/validations/workoutSchema";
import WorkoutDetails from "./workout-details";
import DeleteModal from "./delete-modal";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const { id, title, duration, exerciseList } = workout;

  return (
    <li className="bg-white w-full md:w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-xl duration-300">
      <article className="flex justify-between items-center h-full w-full">
        <WorkoutDetails
          id={id}
          title={title}
          duration={duration}
          exerciseList={exerciseList}
        />
        <DeleteModal id={id} title={title} />
      </article>
    </li>
  );
}
