import { prisma } from "@/lib/db/prisma";

export async function getWorkout(id: string) {
  return prisma.workout.findUnique({
    where: { id },
    include: { exerciseList: true },
  });
}

export async function deleteWorkout(id: string) {
  return prisma.workout.delete({
    where: { id },
  });
}
