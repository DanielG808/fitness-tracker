"use client";

import { Workout } from "@/lib/validations/workoutSchema";
import { WorkoutFormTypes } from "@/lib/constants/workoutFormTypes";
import { useWorkoutForm } from "@/lib/hooks/useWorkoutForm";
import Form from "./ui/form";
import ErrorMessageContainer from "./error-message-container";
import WorkoutFormInputs from "./wokrout-form-inputs";
import LineBreak from "./ui/line-break";
import FormButtons from "./form-buttons";

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
    onSubmit,
    duration,
  } = useWorkoutForm(action, workout);

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const result = await onSubmit(data);
        if (result) closeModal();
      })}
    >
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
