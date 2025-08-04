import { WorkoutCreate } from "../validations/workoutSchema";
import { calculateDuration } from "./calculateDuration";

describe("calculateDuration", () => {
  it("sums all minutes", () => {
    const list = [
      { name: "Squat", minutes: 10, reps: undefined },
      { name: "Pushup", minutes: 5, reps: undefined },
    ];
    expect(calculateDuration(list)).toBe(15);
  });

  it("treats missing or invalid minutes as 0", () => {
    const list = [
      { name: "Squat", minutes: undefined, reps: undefined },
      { name: "Pushup", minutes: NaN, reps: undefined },
    ] as unknown as WorkoutCreate["exerciseList"];
    expect(calculateDuration(list)).toBe(0);
  });
});
