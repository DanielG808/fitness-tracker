import { NextResponse } from "next/server";
import { getAllWorkouts } from "./controller";

export async function GET() {
  const workouts = await getAllWorkouts();
  return NextResponse.json(workouts);
}
