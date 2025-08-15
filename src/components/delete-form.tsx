import { useWorkoutForm } from "@/lib/hooks/useWorkoutForm";
import Button from "./ui/button";

type DeleteFormProps = {
  id: string;
  title: string;
  closeModal: () => void;
};

export default function DeleteForm({ id, title, closeModal }: DeleteFormProps) {
  const { deleteWorkout } = useWorkoutForm("edit");

  async function handleDelete(id: string) {
    closeModal();
    await deleteWorkout(id);
  }

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-lg text-center my-4">
        Are you sure you want to delete{" "}
        <span className="font-bold">{title}</span>?
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
