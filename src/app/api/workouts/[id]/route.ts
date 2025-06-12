import { NextResponse } from "next/server";
import { deleteWorkout, getWorkout, updateWorkout } from "./controller";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const workout = await getWorkout(id);

    if (!workout) {
      return new NextResponse("Not found", { status: 404 });
    }

    return NextResponse.json(workout);
  } catch (error) {
    console.error("GET /api/workouts/[id] error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data: WorkoutCreate = await req.json();
  const response = await updateWorkout(id, data);
  return NextResponse.json(response);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedWorkout = await deleteWorkout(id);

    if (!deletedWorkout) {
      return new NextResponse("Not found", { status: 404 });
    }

    return new NextResponse("Workout has been successfully deleted.");
  } catch (error) {
    console.error("DELETE /api/workouts/[id] error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
