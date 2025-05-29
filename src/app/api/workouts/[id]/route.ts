import { NextResponse } from "next/server";
import { getWorkout } from "./controller";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const id = slug;
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
