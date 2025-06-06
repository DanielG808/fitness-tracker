"use client";

import { WorkoutCreate } from "@/lib/validations/workoutSchema";
import { useWorkouts } from "@/lib/hooks/useWorkouts";
import Button from "./ui/button";
import Form from "./ui/form";
import LineBreak from "./ui/line-break";
import WorkoutFormInputs from "./wokrout-form-inputs";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const {
    register,
    handleSubmit,
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
      <FormButtons closeModal={closeModal} />
    </Form>
  );
}

type FormButtonsProps = {
  closeModal: () => void;
};

function FormButtons({ closeModal }: FormButtonsProps) {
  return (
    <>
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
