import { prisma } from "@/lib/db/prisma";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";
import { Prisma } from "../../../../../prisma/prisma-client";

export async function getWorkout(id: string) {
  return prisma.workout.findUnique({
    where: { id },
    include: { exerciseList: true },
  });
}

export async function updateWorkout(workoutId: string, data: WorkoutCreate) {
  try {
    const updatedWorkout = await prisma.$transaction(async (tx) => {
      await tx.workout.update({
        where: { id: workoutId },
        data: {
          title: data.title,
          duration: data.duration,
          updatedAt: new Date(),
        },
      });

      await tx.exercise.deleteMany({
        where: { workoutId },
      });

      await tx.exercise.createMany({
        data: data.exerciseList.map((exercise) => ({
          ...exercise,
          reps: exercise.reps ?? null,
          workoutId,
        })),
      });

      const fullWorkout = await tx.workout.findUnique({
        where: { id: workoutId },
        include: { exerciseList: true },
      });

      return fullWorkout;
    });

    return updatedWorkout;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      throw new Error("WORKOUT_NOT_FOUND");
    }
    throw error;
  }
}

export async function deleteWorkout(id: string) {
  return prisma.workout.delete({
    where: { id },
  });
}
