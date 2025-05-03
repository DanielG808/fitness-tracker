"use client";

import { useState } from "react";
import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";

type InputField = {
  name: string;
  placeholder: string;
};

const workoutFormInputs: InputField[] = [
  {
    name: "Workout Title",
    placeholder: "Enter your workout title...",
  },
  {
    name: "Total Time",
    placeholder: "Enter your workout length...",
  },
  {
    name: "Exercise",
    placeholder: "Enter an exercise...",
  },
];

export default function NewWorkoutForm() {
  const [inputs, setInputs] = useState<InputField[]>(workoutFormInputs);

  function addExercise() {
    const exercise = {
      name: "Exercise",
      placeholder: "Enter an exercise...",
    };

    setInputs((prev) => [...prev, exercise]);
  }

  return (
    <Form>
      {inputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <Button
        onClick={addExercise}
        style="secondary"
        className="text-sm h-8 my-2 w-fit"
      >
        + Add exercise
      </Button>
      <div className="border-t-1 border-background-dark/25 my-4" />
      <Button type="submit">Submit</Button>
      <Button style="secondary">Cancel</Button>
    </Form>
  );
}
