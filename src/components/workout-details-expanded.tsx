import { Exercise, Workout } from "@/lib/validations/workoutSchema";

type WorkoutDetailsExpandedProps = {
  exerciseList: Exercise[];
};

export default function WorkoutDetailsExpanded({
  exerciseList,
}: WorkoutDetailsExpandedProps) {
  return (
    <div className="text-sm text-gray-600">
      {exerciseList.map((exercise, index) => (
        <div key={index} className="flex">
          <p>{exercise.name}:</p>
          <p>{`${exercise.minutes} minutes`}</p>
          {exercise.reps && <p>{`${exercise.reps} reps`}</p>}
        </div>
      ))}
    </div>
  );
}
