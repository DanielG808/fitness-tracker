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
import sleep from "../utils/sleep";
import { WorkoutFormTypes } from "../constants/workoutFormTypes";

export function useWorkouts(action: WorkoutFormTypes, workout?: Workout) {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<WorkoutCreate>({
    resolver: zodResolver(workoutCreateSchema),
    defaultValues:
      action === "edit" && workout
        ? {
            title: workout.title,
            duration: workout.duration,
            exerciseList: workout.exerciseList.map((ex) => ({
              name: ex.name,
              minutes: ex.minutes,
              reps: ex.reps ?? undefined,
            })),
          }
        : {
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
    async (data: WorkoutCreate): Promise<Workout | null> => {
      await sleep(2);

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
        router.refresh();
        return newWorkout;
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to submit workout: ${error}`);
      }
    },
    [router]
  );

  const updateWorkout = useCallback(
    async (id: string, data: WorkoutCreate): Promise<Workout | null> => {
      await sleep(2);

      try {
        const validatedData = workoutCreateSchema.parse(data);
        const response = await fetch(`/api/workouts/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(validatedData),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to edit workout: ${response.status} ${response.statusText}`
          );
        }

        const updatedWorkout: Workout = await response.json();
        toast.success(`${updatedWorkout.title} was successfully updated!`);
        router.refresh();
        return updatedWorkout;
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to edit workout: ${error}`);
      }
    },
    [router]
  );

  const deleteWorkout = useCallback(
    async (id: string): Promise<boolean> => {
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

  async function onSubmit(data: WorkoutCreate) {
    const result =
      action === "add"
        ? await submitWorkout(data)
        : workout && (await updateWorkout(workout.id, data));
    return result;
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    fields,
    append,
    remove,
    duration,
    onSubmit,
    deleteWorkout,
  };
}
