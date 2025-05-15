"use client";

import { useState } from "react";
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
      <WorkoutFormInputs inputs={inputs} />
<<<<<<< HEAD
      <ExerciseInputButtons
        inputs={inputs}
        addInput={addInput}
        removeInput={removeInput}
      />
=======

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

>>>>>>> b22992c5da36760ab942dbc5b4266571c9a24ef6
      <LineBreak />
      <FormButtons closeModal={closeModal} handleSubmit={handleSubmit} />
    </Form>
  );
}

type WorkoutFormInputsProps = {
  inputs: { name: string; placeholder: string }[];
};

function WorkoutFormInputs({ inputs }: WorkoutFormInputsProps) {
  const [showReps, setShowReps] = useState<boolean[]>(() =>
    inputs.map((_, index) => false)
  );

  const handleShowReps = (index: number) => {
    setShowReps((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <>
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
            {showReps[index] ? (
              <Input
                name="Reps"
                placeholder="eg. 10"
                className="w-20 sm:w-10 shrink-0"
              />
            ) : (
              <Button onClick={() => handleShowReps(index)}>+ Add Reps</Button>
            )}
          </div>
        );
      })}
    </>
  );
}

type ExerciseInputButtonsProps = {
  inputs: { name: string; placeholder: string }[];
  addInput: (name: string, placeholder: string) => void;
  removeInput: () => void;
};

function ExerciseInputButtons({
  inputs,
  addInput,
  removeInput,
}: ExerciseInputButtonsProps) {
  return (
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
  );
}

type FormButtonsProps = {
  closeModal: () => void;
  handleSubmit: () => void;
};

function FormButtons({ closeModal, handleSubmit }: FormButtonsProps) {
  return (
    <>
      <Button onClick={handleSubmit} type="submit">
        Add Workout
      </Button>
      <Button onClick={closeModal} style="secondary">
        Cancel
      </Button>
    </>
  );
}
