import { FieldError, FieldErrors } from "react-hook-form";
import { getFirstExerciseErrors } from "./getFirstExerciseErrors";
import { WorkoutCreate } from "../validations/workoutSchema";

describe("getFirstExerciseErrors", () => {
  it("returns nulls if input is not an array", () => {
    const result = getFirstExerciseErrors(undefined);
    expect(result).toEqual({ name: null, minutes: null });
  });

  it("returns the first error messages for name and the raw object for minutes", () => {
    const mockErrors = [
      {
        name: { message: "Name is required." } as FieldError,
        minutes: { message: "Minutes must be a number." } as FieldError,
      },
    ] as unknown as NonNullable<FieldErrors<WorkoutCreate>["exerciseList"]>;

    const result = getFirstExerciseErrors(mockErrors);
    expect(result).toEqual({
      name: "Name is required.",
      minutes: { message: "Minutes must be a number." },
    });
  });

  it("returns the first found error even if earlier entries have no errors", () => {
    const mockErrors = [
      {},
      { name: { message: "Second item name error." } as FieldError },
    ] as unknown as NonNullable<FieldErrors<WorkoutCreate>["exerciseList"]>;

    const result = getFirstExerciseErrors(mockErrors);
    expect(result).toEqual({
      name: "Second item name error.",
      minutes: null,
    });
  });
});
