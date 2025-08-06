import { Workout } from "@/lib/validations/workoutSchema";

type WorkoutDetailsExpandedProps = {
  workout: Workout;
};

export default function WorkoutDetailsExpanded({
  workout,
}: WorkoutDetailsExpandedProps) {
  return <div>WorkoutDetailsExpanded</div>;
}
