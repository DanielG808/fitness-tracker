import { NextResponse } from "next/server";
import { createWorkout, getAllWorkouts } from "./controller";
import { workoutCreateSchema } from "@/lib/validations/workoutSchema";

export async function GET() {
  try {
    const workouts = await getAllWorkouts();
    return NextResponse.json(workouts);
  } catch (error) {
    console.error("GET /api/workouts error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const workoutData = workoutCreateSchema.parse(body);
    const newWorkout = await createWorkout(workoutData);
    return NextResponse.json(newWorkout, { status: 201 });
  } catch (error) {
    console.error("POST /api/workouts error:", error);
    return new NextResponse("Invalid Request Data", { status: 400 });
  }
}
