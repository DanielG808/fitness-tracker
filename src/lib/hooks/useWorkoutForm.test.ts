import { renderHook, act } from "@testing-library/react";
import { toast } from "sonner";
import { useWorkoutForm } from "./useWorkoutForm";
import { Workout, WorkoutCreate } from "../validations/workoutSchema";

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

const mockWorkout: Workout = {
  id: "123",
  title: "Test Workout",
  duration: 30,
  exerciseList: [
    { id: "1", name: "Push Ups", minutes: 10, reps: 20 },
    { id: "2", name: "Squats", minutes: 20, reps: 30 },
  ],
};

describe("useWorkoutForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("submits a new workout successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockWorkout,
    });

    const { result } = renderHook(() => useWorkoutForm("add", undefined));

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

    expect(fetch).toHaveBeenCalledWith(
      "/api/workouts",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
    );
    expect(router.refresh).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(
      `${mockWorkout.title} was successfully added!`
    );
  });

  it("updates a workout successfully", async () => {
    const updatedWorkout: Workout = {
      ...mockWorkout,
      title: "Updated Workout",
      duration: 40,
      exerciseList: [
        { id: "a", name: "Push Ups", minutes: 10, reps: 20 },
        { id: "b", name: "Lunges", minutes: 25, reps: 35 },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => updatedWorkout,
    });

    const { result } = renderHook(() => useWorkoutForm("edit", mockWorkout));

    const newData: WorkoutCreate = {
      title: "Updated Workout",
      duration: 40,
      exerciseList: [
        { name: "Push Ups", minutes: 10, reps: 20 },
        { name: "Lunges", minutes: 25, reps: 35 },
      ],
    };

    await act(async () => {
      await result.current.onSubmit(newData);
    });

    expect(fetch).toHaveBeenCalledWith(
      "/api/workouts/123",
      expect.objectContaining({
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newData),
      })
    );
    expect(router.refresh).toHaveBeenCalled();
    expect(toast.success).toHaveBeenLastCalledWith(
      "Updated Workout was successfully updated!"
    );
  });

  it("deletes a workout successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
    });

    const { result } = renderHook(() => useWorkoutForm("edit", undefined));

    const success = await act(async () => {
      return await result.current.deleteWorkout("123");
    });

    expect(fetch).toHaveBeenCalledWith("/api/workouts/123", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    expect(router.refresh).toHaveBeenCalled();
    expect(toast.success).toHaveBeenLastCalledWith("Workout has been deleted!");
    expect(success).toBe(true);
  });

  it("fails to submit a new workout", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const { result } = renderHook(() => useWorkoutForm("add", undefined));

    const data: WorkoutCreate = {
      title: "Bad Workout",
      duration: 20,
      exerciseList: [{ name: "Sit Ups", minutes: 20, reps: 30 }],
    };

    let error: unknown;
    await act(async () => {
      try {
        await result.current.onSubmit(data);
      } catch (e) {
        error = e;
      }
    });

    expect(toast.warning).toHaveBeenCalledWith(
      "Workout was not successfully added."
    );
    expect((error as Error).message).toMatch("Failed to submit workout");
  });

  it("fails to update a workout", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const { result } = renderHook(() => useWorkoutForm("edit", mockWorkout));

    const newData: WorkoutCreate = {
      title: "Updated Workout",
      duration: 40,
      exerciseList: [
        { name: "Push Ups", minutes: 10, reps: 20 },
        { name: "Lunges", minutes: 25, reps: 35 },
      ],
    };

    let error: unknown;
    await act(async () => {
      try {
        await result.current.onSubmit(newData);
      } catch (e) {
        error = e;
      }
    });

    expect(toast.warning).toHaveBeenCalledWith(
      "Workout was not successfully updated."
    );
    expect((error as Error).message).toMatch("Failed to edit workout");
  });

  it("fails to delete a workout", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const { result } = renderHook(() => useWorkoutForm("edit", undefined));

    let error: unknown;
    await act(async () => {
      try {
        await result.current.deleteWorkout("123");
      } catch (e) {
        error = e;
      }
    });

    expect(toast.warning).toHaveBeenCalledWith(
      "Workout was not successfully deleted."
    );
    expect((error as Error).message).toMatch("Failed to delete workout");
  });
});
