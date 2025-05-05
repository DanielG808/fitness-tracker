"use client";

import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import LineBreak from "./ui/line-break";
import {
  inputMinimum,
  workoutFormInputs,
} from "@/lib/constants/workoutFormInputs";
import { useInputList } from "@/lib/hooks/useInputList";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput, removeInput } = useInputList(
    workoutFormInputs,
    inputMinimum
  );

  return (
    <Form>
      {/* Inputs */}
      {inputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <div className="flex flex-col sm:flex-row space-x-2">
        {/* Add/Remove exercise input buttons */}
        <Button
          onClick={() => addInput("Exercise", "Enter an exercise...")}
          style="secondary"
          className="text-sm h-8 my-2 w-40"
        >
          + Add exercise
        </Button>
        {inputs.length > inputMinimum && (
          <Button
            onClick={() => removeInput()}
            style="secondary"
            className="text-sm h-8 my-2 w-40"
          >
            - Remove exercise
          </Button>
        )}
      </div>

      <LineBreak />

      {/* Submit/Cancel nuttons */}
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </Form>
  );
}
