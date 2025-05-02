import AddInputButton from "./add-input-button";
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
]

export default function NewWorkoutForm() {
  return (
    <Form>
        {workoutFormInputs.map(({ name, placeholder }, index) => (
            <Input key={index} name={name} placeholder={placeholder} />
        ))}
        <AddInputButton text="+ Add exercise" />
    </Form>
  )
}
