import { Exercise, Workout } from "@/lib/validations/workoutSchema";

type WorkoutDetailsExpandedProps = {
  exerciseList: Exercise[];
};

export default function WorkoutDetailsExpanded({
  exerciseList,
}: WorkoutDetailsExpandedProps) {
  return (
    <div className="flex space-x-10 text-sm text-gray-600">
      {exerciseList.map((exercise, index) => (
        <div key={index} className="flex flex-col space-x-1 my-2">
          <p className="font-semibold">{exercise.name}:</p>
          <div className="flex flex-col space-x-1 ml-2 py-1">
            <p>
              <span className="font-semibold">{exercise.minutes} </span>minutes
            </p>
            {exercise.reps && (
              <p>
                <span className="font-semibold">{exercise.reps} </span>reps
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
