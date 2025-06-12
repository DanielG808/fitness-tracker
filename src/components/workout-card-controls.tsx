import {
  ArrowsPointingOutIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import DeleteModal from "./delete-modal";
import Button from "./ui/button";

type WorkoutCardControlsProps = {
  id: string;
  title: string;
};

export default function WorkoutCardControls({
  id,
  title,
}: WorkoutCardControlsProps) {
  return (
    <section className="flex flex-col space-y-3 h-full">
      <Button variant="icon">
        <ArrowsPointingOutIcon className="h-5 w-5" />
      </Button>
      <Button variant="icon">
        <PencilSquareIcon className="h-5 w-5" />
      </Button>
      <DeleteModal id={id} title={title} />
    </section>
  );
}
