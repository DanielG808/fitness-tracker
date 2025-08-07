import { act, renderHook } from "@testing-library/react";
import { useWorkoutCard } from "./useWorkoutCard";

describe("useWorkoutCard", () => {
  it("should intialize with a value of false", () => {
    const { result } = renderHook(() => useWorkoutCard());
    expect(result.current.expanded).toEqual(false);
  });

  it("should toggle value to true when toggleWorkoutCard is called", () => {
    const { result } = renderHook(() => useWorkoutCard());

    act(() => {
      result.current.toggleWorkoutCard();
    });

    expect(result.current.expanded).toEqual(true);
  });

  it("should toggle value to back to false after toggling to true", () => {
    const { result } = renderHook(() => useWorkoutCard());

    act(() => {
      result.current.toggleWorkoutCard();
      result.current.toggleWorkoutCard();
    });

    expect(result.current.expanded).toEqual(false);
  });
});
