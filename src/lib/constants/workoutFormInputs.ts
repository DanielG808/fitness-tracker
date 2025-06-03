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
    name: "Exercise",
    placeholder: "Enter an exercise...",
  },
];

export const inputMinimum = workoutFormInputs.length;

export const inputMaximum = workoutFormInputs.length + 9;
