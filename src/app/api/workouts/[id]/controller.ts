import { prisma } from "@/lib/db/prisma";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";

export async function getWorkout(id: string) {
  return prisma.workout.findUnique({
    where: { id },
    include: { exerciseList: true },
  });
}

export async function updateWorkout(workoutId: string, data: WorkoutCreate) {
  const existingIds = await prisma.exercise.findMany({
    where: { workoutId },
  });

  return existingIds;
}

export async function deleteWorkout(id: string) {
  return prisma.workout.delete({
    where: { id },
  });
}
