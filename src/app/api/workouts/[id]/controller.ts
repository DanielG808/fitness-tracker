import { prisma } from "@/lib/db/prisma";

export async function getWorkout(id: string) {
  return prisma.workout.findUnique({
    where: { id },
    include: { exerciseList: true },
  });
}
