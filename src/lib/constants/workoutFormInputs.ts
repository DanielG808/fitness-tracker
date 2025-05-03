export type InputField = {
  name: string;
  placeholder: string;
};

export const workoutFormInputs: InputField[] = [
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
