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
    <section className="border-2 border-red-400 bg-red-200 px-4 py-2 rounded-md text-red-700">
      <h1 className="font-semibold text-lg">Errors:</h1>
      <ul className="pl-2 pt-1">
        {titleError?.message && <li>{`• ${titleError.message}`}</li>}
        {firstNameError && <li>{`• ${firstNameError}`}</li>}
        {firstMinutesError && <li>• Exercise minutes field is required.</li>}
      </ul>
    </section>
  );
}
