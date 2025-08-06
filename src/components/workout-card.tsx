"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Workout } from "@/lib/validations/workoutSchema";
import WorkoutDetails from "./workout-details";
import WorkoutCardControls from "./workout-card-controls";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      className={`bg-white w-full md:w-2/3 rounded-lg shadow-md hover:shadow-xl duration-300 overflow-hidden transition-[height] ease-in-out ${
        expanded ? "h-auto" : "h-28"
      }`}
    >
      <div className="p-4 h-full">
        <article className="flex justify-between items-start h-full w-full">
          <div className="flex flex-col justify-between h-full flex-1">
            <WorkoutDetails workout={workout} />
          </div>

          <WorkoutCardControls
            workout={workout}
            onExpand={() => setExpanded((prev) => !prev)}
          />
        </article>
      </div>

      {/* Expanded section */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            className="px-4 pb-4"
          >
            <ExpandedWorkoutContent workout={workout} />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function ExpandedWorkoutContent({ workout }: { workout: Workout }) {
  return (
    <div className="text-sm text-gray-600">
      <p>More details about "{workout.title}" go here.</p>
    </div>
  );
}
