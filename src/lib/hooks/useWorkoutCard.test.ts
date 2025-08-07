import { renderHook } from "@testing-library/react";
import { useWorkoutCard } from "./useWorkoutCard";

describe("useWorkoutCard", () => {
  it("should intialize with a value of false", () => {
    const { result } = renderHook(() => useWorkoutCard());
    expect(result.current.expanded).toEqual(false);
  });
});
