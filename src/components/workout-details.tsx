import { Workout } from "@/lib/validations/workoutSchema";
import H2 from "./ui/h2";

type WorkoutDetailsProps = Workout;

export default function WorkoutDetails({
  title,
  duration,
  workoutList,
}: WorkoutDetailsProps) {
  return (
    <div className="flex flex-col justify-between h-full w-full px-2">
      <header className="flex flex-col justify-between h-full sm:flex-row ">
        <H2 className="text-xl font-semibold">{title}</H2>
        <span className="mt-1 sm:mt-0 sm:ml-2 font-semibold text-black/75">{`${duration} mins`}</span>
      </header>
      <ul className="flex space-x-1 text-black/75">
        {workoutList.map((workout, index) => (
          <li key={index} className="hidden md:block">
            {workout}
            {index < workoutList.length - 1 && ","}
          </li>
        ))}
      </ul>
    </div>
  );
}
