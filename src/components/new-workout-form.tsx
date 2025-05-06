"use client";

import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import LineBreak from "./ui/line-break";
import {
  inputMinimum,
  inputMaximum,
  workoutFormInputs,
} from "@/lib/constants/workoutFormInputs";
import { useInputList } from "@/lib/hooks/useInputList";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput, removeInput } = useInputList(
    workoutFormInputs,
    inputMinimum,
    inputMaximum
  );

  function handleSubmit() {
    console.log("Submitting!");
  }

  return (
    <Form>
      {/* Inputs */}
      {inputs.map(({ name, placeholder }, index) => {
        const isExercise = index >= 2;
        const exerciseCount = inputs.length - 2;
        const number = index - 1;

        if (!isExercise) {
          return <Input key={index} name={name} placeholder={placeholder} />;
        }

        return (
          <div key={index} className="flex space-x-1">
            <Input
              key={index}
              name={
                isExercise
                  ? exerciseCount > 1
                    ? `Exercise #${number}`
                    : "Exercise"
                  : name
              }
              placeholder={placeholder}
              className="flex-grow"
            />

            <Input
              name="Minutes"
              placeholder="eg. 10"
              className="w-20 sm:w-10 shrink-0"
            />
            <Input
              name="Reps"
              placeholder="eg. 10"
              className="w-20 sm:w-10 shrink-0"
            />
          </div>
        );
      })}

      {/* Add/Remove exercise input buttons */}
      <div className="flex flex-col sm:flex-row space-x-2">
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
      <Button onClick={handleSubmit} type="submit">
        Add Workout
      </Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </Form>
  );
}
