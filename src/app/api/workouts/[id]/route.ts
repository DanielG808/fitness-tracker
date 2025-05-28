import { NextResponse } from "next/server";
import { getWorkout } from "./controller";

export async function GET(
  req: Request,
  { params }: { params: { id: string | string[] } }
) {
  try {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
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
