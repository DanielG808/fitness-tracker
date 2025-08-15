import { Workout } from "@/lib/validations/workoutSchema";

type WorkoutDetailsProps = { workout: Workout; expanded: boolean };

export default function WorkoutDetails({
  workout,
  expanded,
}: WorkoutDetailsProps) {
  const { id, title, duration, exerciseList } = workout;

  return (
    !expanded && (
      <ul
        className={`flex space-x-1 font-semibold text-gray-600 transition-all duration-200`}
      >
        {exerciseList.map((exercise, index) => (
          <li key={index} className="hidden md:block">
            {exercise.name}
            {index < exerciseList.length - 1 && ","}
          </li>
        ))}
      </ul>
    )
  );
}
