import { prisma } from "@/lib/db/prisma";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";

export async function getAllWorkouts() {
  return prisma.workout.findMany({
    orderBy: { createdAt: "asc" },
    include: { exerciseList: true },
  });
}

export async function createWorkout(data: WorkoutCreate) {
  const { title, duration, exerciseList } = data;

  return await prisma.workout.create({
    data: {
      title,
      duration,
      exerciseList: { create: exerciseList },
    },
    include: {
      exerciseList: true,
    },
  });
}
