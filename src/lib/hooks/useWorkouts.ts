import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { toast } from "sonner";
import {
  Workout,
  WorkoutCreate,
  workoutCreateSchema,
} from "../validations/workoutSchema";

export function useWorkouts() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WorkoutCreate>({
    resolver: zodResolver(workoutCreateSchema),
    defaultValues: {
      title: "",
      duration: 0,
      exerciseList: [{ name: "", minutes: undefined, reps: undefined }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "exerciseList",
  });

  const exerciseList = useWatch({ control, name: "exerciseList" });
  const duration = useWatch({ control, name: "duration" });

  useEffect(() => {
    const total = exerciseList?.reduce(
      (sum, ex) => sum + (Number(ex.minutes) || 0),
      0
    );
    setValue("duration", total);
  }, [exerciseList, setValue]);

  const submitWorkout = useCallback(
    async (data: WorkoutCreate): Promise<WorkoutCreate | null> => {
      console.log("Workout data submitted:", data);

      try {
        const validatedData = workoutCreateSchema.parse(data);
        const response = await fetch("/api/workouts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(validatedData),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to submit workout: ${response.status} ${response.statusText}`
          );
        }

        const newWorkout: Workout = await response.json();
        toast.success(`${newWorkout.title} was successfully added!`);
        return newWorkout;
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to submit workout: ${error}`);
      }
    },
    []
  );

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

  return {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    duration,
    submitWorkout,
    deleteWorkout,
  };
}
