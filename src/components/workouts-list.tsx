import WorkoutCard from "./workout-card";

const workouts = [
  {
    title: "Cardio",
    duration: 30,
    workoutList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    workoutList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    workoutList: ["Squats", "Leg Press", "Leg Extensions"],
  },
];

export default function WorkoutsList() {
  return (
    <ul className="flex flex-col items-center w-full space-y-4 m-4 sm:m-10">
      {workouts.map((workout, index) => (
        <WorkoutCard
          key={index}
          workout={{
            ...workout,
            workoutList: workout.workoutList as [string, ...string[]],
          }}
        />
      ))}
    </ul>
  );
}
