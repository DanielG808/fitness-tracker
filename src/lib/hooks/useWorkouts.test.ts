import { renderHook, act } from "@testing-library/react";
import { toast } from "sonner";
import { useWorkouts } from "./useWorkouts";
import { WorkoutCreate } from "../validations/workoutSchema";

const router = {
  refresh: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    warning: jest.fn(),
  },
}));

global.fetch = jest.fn();

const mockWorkout = {
  id: "123",
  title: "Test Workout",
  duration: 30,
  exerciseList: [
    { name: "Push Ups", minutes: 10, reps: 20 },
    { name: "Squats", minutes: 20, reps: 30 },
  ],
};

describe("useWorkouts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("submits a new workout successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockWorkout,
    });

    const { result } = renderHook(() => useWorkouts("edit", undefined));

    const data: WorkoutCreate = {
      title: "Test Workout",
      duration: 30,
      exerciseList: [
        { name: "Push Ups", minutes: 10, reps: 20 },
        { name: "Squats", minutes: 20, reps: 30 },
      ],
    };

    await act(async () => {
      await result.current.onSubmit(data);
    });

    expect(fetch).toHaveBeenCalledWith("/api/workouts", expect.any(Object));
    expect(router.refresh).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(
      `${mockWorkout.title} was successfully added!`
    );
  });
});
