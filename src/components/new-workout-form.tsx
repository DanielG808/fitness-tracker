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
]

export default function NewWorkoutForm() {
  return (
    <Form>
        {
            workoutFormInputs.map(({ name, placeholder }, index) => (
                <Input name={name} placeholder={placeholder} />
            ))
        }
    </Form>
  )
}
