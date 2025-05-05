"use client";

import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import { workoutFormInputs } from "@/lib/constants/workoutFormInputs";
import { useInputList } from "@/lib/hooks/useInputList";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput, removeInput } = useInputList(workoutFormInputs);

  return (
    <Form>
      {inputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <div className="flex space-x-2">

      <Button
        onClick={() => addInput("Exercise", "Enter an exercise...")}
        style="secondary"
        className="text-sm h-8 my-2 w-40"
      >
        + Add exercise
      </Button>
      {
        inputs.length > 3 &&
        <Button
            onClick={() => removeInput()}
            style="secondary"
            className="text-sm h-8 my-2 w-40"
        >
            - Remove exercise
        </Button>
      }
      </div>
      <div className="border-t-1 border-background-dark/25 my-4" />
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </Form>
  );
}
