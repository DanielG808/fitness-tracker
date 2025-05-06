import { z } from "zod";

export const workoutSchema = z.object({
  title: z.string().min(1, "Title is required."),
  duration: z.number().int().positive("Duration must be a positive number."),
  exerciseList: z
    .array(z.string())
    .min(1, { message: "At least one exercise is required." })
    .max(10),
});

export type Workout = z.infer<typeof workoutSchema>;
