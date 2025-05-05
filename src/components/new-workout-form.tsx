"use client";

import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import { workoutFormInputs } from "@/lib/constants/workoutFormInputs";
import { useAddInput } from "@/lib/hooks/useAddInput";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput } = useAddInput(workoutFormInputs);

  return (
    <Form>
      {inputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <Button
        onClick={() => addInput("Exercise", "Enter an exercise...")}
        style="secondary"
        className="text-sm h-8 my-2 w-fit"
      >
        + Add exercise
      </Button>
      <div className="border-t-1 border-background-dark/25 my-4" />
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </Form>
  );
}
