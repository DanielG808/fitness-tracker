"use client";

import { Workout, WorkoutCreate } from "@/lib/validations/workoutSchema";
import { useWorkouts } from "@/lib/hooks/useWorkouts";
import Form from "./ui/form";
import LineBreak from "./ui/line-break";
import WorkoutFormInputs from "./wokrout-form-inputs";
import FormButtons from "./form-buttons";
import ErrorMessageContainer from "./error-message-container";
import { WorkoutFormTypes } from "@/lib/constants/workoutFormTypes";

type NewWorkoutFormProps = {
  workout?: Workout;
  action: WorkoutFormTypes;
  closeModal: () => void;
};

export default function WorkoutForm({
  workout,
  action,
  closeModal,
}: NewWorkoutFormProps) {
  const {
    register,
    handleSubmit,
    isSubmitting,
    fields,
    errors,
    append,
    remove,
    submitWorkout,
    duration,
  } = useWorkouts(action, workout);

  async function onSubmit(data: WorkoutCreate) {
    const result = await submitWorkout(data);
    if (result) closeModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(errors).length > 0 && (
        <ErrorMessageContainer errors={errors} />
      )}
      <WorkoutFormInputs
        register={register}
        fields={fields}
        append={append}
        remove={remove}
        duration={duration}
      />
      <LineBreak />
      <FormButtons
        submitButtonText={action === "add" ? "Add Workout" : "Edit Workout"}
        isSubmitting={isSubmitting}
        closeModal={closeModal}
      />
    </Form>
  );
}
