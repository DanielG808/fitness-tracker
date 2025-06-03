import { useRouter } from "next/navigation";
import { useCallback } from "react";

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
        return true;
      } catch (error) {
        console.error("Failed to delete workout:", error);
        return false;
      }
    },
    [router]
  );

  return { deleteWorkout };
}
