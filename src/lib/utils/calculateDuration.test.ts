import { calculateDuration } from "./calculateDuration";

describe("calculateDuration", () => {
  it("sums all minutes", () => {
    const list = [
      { name: "Squat", minutes: 10, reps: undefined },
      { name: "Pushup", minutes: 5, reps: undefined },
    ];
    expect(calculateDuration(list)).toBe(15);
  });
});
