import { Workout } from "@/lib/validations/workoutSchema";
import H2 from "./ui/h2";

type WorkoutDetailsProps = Workout;

export default function WorkoutDetails({
  title,
  duration,
  exerciseList,
}: WorkoutDetailsProps) {
  return (
    <div className="flex flex-col justify-between h-full w-full px-2">
      <header className="flex flex-col justify-between h-full sm:h-auto sm:justify-start sm:flex-row sm:items-center">
        <H2 className="text-xl font-semibold">{title}</H2>
        <span className="mt-1 sm:mt-0 sm:ml-2 font-semibold text-black/75">{`${duration} mins`}</span>
      </header>
      <ul className="flex space-x-1 text-black/75">
        {exerciseList.map((exercise, index) => (
          <li key={index} className="hidden md:block">
            {exercise.name}
            {index < exerciseList.length - 1 && ","}
          </li>
        ))}
      </ul>
    </div>
  );
}
