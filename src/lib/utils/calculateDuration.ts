import { WorkoutCreate } from "../validations/workoutSchema";

export function calculateDuration(exerciseList: WorkoutCreate["exerciseList"]) {
  return exerciseList.reduce((sum, ex) => sum + (Number(ex.minutes) || 0), 0);
}
