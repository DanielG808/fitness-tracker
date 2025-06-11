import { FieldErrors } from "react-hook-form";
import { WorkoutCreate } from "../validations/workoutSchema";

export function getFirstExerciseErrors(
  exerciseListErrors: FieldErrors<WorkoutCreate>["exerciseList"]
) {
  if (!Array.isArray(exerciseListErrors)) return { name: null, minutes: null };

  const firstError = exerciseListErrors.find(
    (err) => err?.name || err?.minutes
  );

  return {
    name: firstError?.name?.message ?? null,
    minutes: firstError?.minutes ?? null,
  };
}
