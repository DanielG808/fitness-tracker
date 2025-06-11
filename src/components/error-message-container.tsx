import { getFirstExerciseErrors } from "@/lib/utils/getFirstExerciseErrors";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";
import { FieldError, FieldErrors } from "react-hook-form";

type ErrorMessageContainerProps = {
  errors: FieldErrors<WorkoutCreate>;
};

export default function ErrorMessageContainer({
  errors,
}: ErrorMessageContainerProps) {
  const titleError = errors.title as FieldError;
  const exerciseListErrors =
    errors.exerciseList as FieldErrors<WorkoutCreate>["exerciseList"];

  const { name: firstNameError, minutes: firstMinutesError } =
    getFirstExerciseErrors(exerciseListErrors);

  return (
    <div>
      {titleError?.message && <p>{titleError.message}</p>}
      {firstNameError && <p>{firstNameError}</p>}
      {firstMinutesError && <p>Exercise minutes field is required.</p>}
    </div>
  );
}
