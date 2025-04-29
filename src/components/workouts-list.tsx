import WorkoutCard from "./workout-card"

const workouts =[
  {
    title: "Cardio",
    duration: 30,
    workoutList: [
      "Running",
      "Swimming",
      "Biking",
    ]
  },
  {
    title: "Back & Bicep",
    duration: 60,
    workoutList: [
      "Pull Ups",
      "Bicep Curls"
    ]
  }
]

export default function WorkoutsList() {
  return (
    <ul className="flex flex-col items-center w-full space-y-4 m-10">
      {
        workouts.map((workout) => (
          <WorkoutCard workout={workout} />
        ))
      }
    </ul>
  )
}
