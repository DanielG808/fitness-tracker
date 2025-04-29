import { z } from "zod"

export const workoutSchema = z.object({
    title: z.string().min(1, "Title is required."),
    duration: z.number().int().positive("Duration must be a positive number."),
    workoutList: z.array(z.string()).nonempty("List of workouts must contain at least one exercise.")
})

export type Workout = z.infer<typeof workoutSchema>