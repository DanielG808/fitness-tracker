"use client";

import { useState } from "react";
import { Workout } from "@/lib/validations/workoutSchema";
import WorkoutDetails from "./workout-details";
import WorkoutCardControls from "./workout-card-controls";
import WorkoutDetailsExpanded from "./workout-details-expanded";
import H2 from "./ui/h2";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      className={`bg-white w-full md:w-2/3 rounded-lg shadow-md hover:shadow-xl duration-300 overflow-hidden transition-[height] ease-in-out w-full ${
        expanded ? "h-auto" : "h-28"
      }`}
    >
      <div className="flex justify-between p-4 w-full h-full">
        <article
          className={`flex flex-col items-start ${!expanded && "h-full"}`}
        >
          <div className="flex flex-col justify-between h-full w-full px-2">
            <header className="flex flex-col justify-between h-full sm:h-auto sm:justify-start sm:flex-row sm:items-center">
              <H2 className="text-xl font-semibold">{workout.title}</H2>
              <span className="mt-1 sm:mt-0 sm:ml-2 font-semibold text-black/75">{`${workout.duration} mins`}</span>
            </header>

            {!expanded ? (
              <WorkoutDetails workout={workout} expanded={expanded} />
            ) : (
              <WorkoutDetailsExpanded exerciseList={workout.exerciseList} />
            )}
          </div>
        </article>
        <WorkoutCardControls
          workout={workout}
          onExpand={() => setExpanded((prev) => !prev)}
        />
      </div>
    </li>
  );
}
