import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Exercise name is required."),
  minutes: z
    .number()
    .int()
    .positive("Exercise time must be a positive number.")
    .gt(0, "Duration must be longer than zero minutes."),
  reps: z
    .number()
    .int()
    .positive("Rep count must be a positive number.")
    .gt(0, "Duration must be longer than zero minutes.")
    .nullable()
    .optional(),
});

export const exerciseCreateSchema = exerciseSchema.omit({ id: true });

export const workoutSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required."),
  duration: z.number().int().positive("Duration must be a positive number."),
  exerciseList: z
    .array(exerciseSchema)
    .min(1, "At least one exercise is required.")
    .max(10),
});

export const workoutCreateSchema = workoutSchema
  .extend({
    exerciseList: z.array(exerciseCreateSchema).min(1).max(10),
  })
  .omit({ id: true });

export type Workout = z.infer<typeof workoutSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;

export type WorkoutCreate = z.infer<typeof workoutCreateSchema>;
export type ExerciseCreate = z.infer<typeof exerciseCreateSchema>;
