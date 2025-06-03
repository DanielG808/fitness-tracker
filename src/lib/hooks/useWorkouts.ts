import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

export function useWorkouts() {
  const router = useRouter();

  const deleteWorkout = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(`/api/workouts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        console.log(response);
        router.refresh();
        toast.success("Workout has been deleted!");
        return true;
      } catch (error) {
        console.error("Failed to delete workout:", error);
        toast.warning("Workout was not successfully deleted.");
        return false;
      }
    },
    [router]
  );

  return { deleteWorkout };
}
