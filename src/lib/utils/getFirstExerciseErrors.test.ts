import { getFirstExerciseErrors } from "./getFirstExerciseErrors";

describe("getFirstExerciseErrors", () => {
  it("returns nulls if input is not an array", () => {
    const result = getFirstExerciseErrors(undefined);
    expect(result).toEqual({ name: null, minutes: null });
  });
});
