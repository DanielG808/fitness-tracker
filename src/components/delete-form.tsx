import { useWorkouts } from "@/lib/hooks/useWorkouts";
import Button from "./ui/button";

export default function DeleteForm({ id, title, closeModal }) {
  const { deleteWorkout } = useWorkouts();

  async function handleDelete(id: string) {
    closeModal();
    await deleteWorkout(id);
  }

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-lg text-center">
        Are you sure you want to delete{" "}
        <span className="font-bold">{title}</span> from your workouts list?
      </h2>
      <div className="flex justify-center items-center w-full mt-4 space-x-2">
        <Button
          onClick={() => handleDelete(id)}
          variant="warning"
          className="w-1/5"
        >
          Delete
        </Button>
        <Button onClick={closeModal} variant="secondary" className="w-1/5">
          Cancel
        </Button>
      </div>
    </section>
  );
}
