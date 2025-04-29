import WorkoutCard from "./workout-card"

export default function WorkoutsList() {
  return (
    <ul className="flex flex-col items-center w-full space-y-4">
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
    </ul>
  )
}
