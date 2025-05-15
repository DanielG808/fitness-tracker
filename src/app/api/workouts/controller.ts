import { prisma } from "@/lib/db/prisma";

export async function getAllWorkouts() {
  return prisma.workouts.findMany();
}
