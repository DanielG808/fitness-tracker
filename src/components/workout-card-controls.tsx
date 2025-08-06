import {
  ArrowsPointingOutIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import DeleteModal from "./delete-modal";
import Button from "./ui/button";
import WorkoutModal from "./workout-modal";
import { Workout } from "@/lib/validations/workoutSchema";

type WorkoutCardControlsProps = {
  workout: Workout;
  onExpand?: () => void;
};

export default function WorkoutCardControls({
  workout,
  onExpand,
}: WorkoutCardControlsProps) {
  const { id, title } = workout;

  return (
    <section className="flex flex-col space-y-3">
      <Button variant="icon" onClick={onExpand}>
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </Button>
      <WorkoutModal
        workout={workout}
        action="edit"
        icon={<PencilSquareIcon className="h-5 w-5" />}
        buttonVariant="icon"
      />
      <DeleteModal id={id} title={title} />
    </section>
  );
}
