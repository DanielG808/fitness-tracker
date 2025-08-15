import {
  ChevronDoubleUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import DeleteModal from "./delete-modal";
import Button from "./ui/button";
import WorkoutModal from "./workout-modal";
import { Workout } from "@/lib/validations/workoutSchema";
import { motion } from "framer-motion";

type WorkoutCardControlsProps = {
  workout: Workout;
  expanded: boolean;
  onExpand?: () => void;
};

export default function WorkoutCardControls({
  workout,
  expanded,
  onExpand,
}: WorkoutCardControlsProps) {
  const { id, title } = workout;

  return (
    <section className="flex flex-col space-y-3">
      <WorkoutModal
        workout={workout}
        action="edit"
        icon={<PencilSquareIcon className="h-5 w-5" />}
        buttonVariant="icon"
      />
      <DeleteModal id={id} title={title} />
      <Button variant="icon" onClick={onExpand}>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDoubleUpIcon className="h-5 w-5" />
        </motion.div>
      </Button>
    </section>
  );
}
