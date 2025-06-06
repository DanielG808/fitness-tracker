"use client";

import { WorkoutCreate } from "@/lib/validations/workoutSchema";
import { useWorkouts } from "@/lib/hooks/useWorkouts";
import Form from "./ui/form";
import LineBreak from "./ui/line-break";
import WorkoutFormInputs from "./wokrout-form-inputs";
import FormButtons from "./form-buttons";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const {
    register,
    handleSubmit,
    isSubmitting,
    fields,
    append,
    remove,
    submitWorkout,
    duration,
  } = useWorkouts();

  async function onSubmit(data: WorkoutCreate) {
    const result = await submitWorkout(data);
    if (result) closeModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WorkoutFormInputs
        register={register}
        fields={fields}
        append={append}
        remove={remove}
        duration={duration}
      />
      <LineBreak />
      <FormButtons
        submitButtonText="Add Workout"
        isSubmitting={isSubmitting}
        closeModal={closeModal}
      />
    </Form>
  );
}
