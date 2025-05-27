import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Exercise name is required."),
  minutes: z
    .number()
    .int()
    .positive("Exercise time must be a positive number."),
  reps: z
    .number()
    .int()
    .positive("Rep count must be a positive number.")
    .optional(),
});

export const workoutSchema = z.object({
  title: z.string().min(1, "Title is required."),
  duration: z.number().int().positive("Duration must be a positive number."),
  exerciseList: z
    .array(exerciseSchema)
    .min(1, "At least one exercise is required.")
    .max(10),
});

export type Workout = z.infer<typeof workoutSchema>;

export type Exercise = z.infer<typeof exerciseSchema>;
