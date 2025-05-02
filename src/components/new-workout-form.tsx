import Input from "./ui/input";

export default function NewWorkoutForm() {
  return (
    <form className="flex flex-col text-black">
        <Input name="Title" placeholder="Enter your workout title..." />
    </form>
  )
}
