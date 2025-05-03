import AddInputButton from "./add-input-button";
import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";

const workoutFormInputs = [
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
  return (
    <Form>
      {workoutFormInputs.map(({ name, placeholder }, index) => (
        <Input key={index} name={name} placeholder={placeholder} />
      ))}
      <AddInputButton text="+ Add exercise" />
      <div className="border-t-1 border-background-dark/25 my-4" />
      <Button>Submit</Button>
      <Button className="bg-background-light/65 text-black/75 hover:bg-background-light hover:text-black/75">
        Cancel
      </Button>
    </Form>
  );
}
