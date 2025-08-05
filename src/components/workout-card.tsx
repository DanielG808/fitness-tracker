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
    <motion.li
      layout
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
      className="bg-white w-full md:w-2/3 p-4 rounded-lg shadow-md hover:shadow-xl duration-300"
    >
      <article className="flex justify-between items-start h-full w-full">
        <div className="flex-1">
          <WorkoutDetails workout={workout} />
        </div>
        <WorkoutCardControls
          workout={workout}
          onExpand={() => setExpanded((prev) => !prev)}
        />
      </article>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4"
          >
            <ExpandedWorkoutContent workout={workout} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function ExpandedWorkoutContent({ workout }: { workout: Workout }) {
  return (
    <div>
      <p className="text-sm text-gray-600">More workout details here...</p>
    </div>
  );
}
