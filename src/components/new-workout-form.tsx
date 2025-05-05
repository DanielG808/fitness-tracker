"use client";

import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import { inputMinimum, workoutFormInputs } from "@/lib/constants/workoutFormInputs";
import { useInputList } from "@/lib/hooks/useInputList";
import LineBreak from "./ui/line-break";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput, removeInput } = useInputList(workoutFormInputs, inputMinimum);

  return (
    <Form>
      {inputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <div className="flex flex-col sm:flex-row space-x-2">

      <Button
        onClick={() => addInput("Exercise", "Enter an exercise...")}
        style="secondary"
        className="text-sm h-8 my-2 w-40"
      >
        + Add exercise
      </Button>
      {
        inputs.length > inputMinimum &&
        <Button
            onClick={() => removeInput()}
            style="secondary"
            className="text-sm h-8 my-2 w-40"
        >
            - Remove exercise
        </Button>
      }
      </div>
      <LineBreak />
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </Form>
  );
}
