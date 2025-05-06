import WorkoutCard from "./workout-card";

const workouts = [
  {
    title: "Cardio",
    duration: 30,
    exerciseList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    exerciseList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    exerciseList: ["Squats", "Leg Press", "Leg Extensions"],
  },
  {
    title: "Cardio",
    duration: 30,
    exerciseList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    exerciseList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    exerciseList: ["Squats", "Leg Press", "Leg Extensions"],
  },
  {
    title: "Cardio",
    duration: 30,
    exerciseList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    exerciseList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    exerciseList: ["Squats", "Leg Press", "Leg Extensions"],
  },
  {
    title: "Cardio",
    duration: 30,
    exerciseList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    exerciseList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    exerciseList: ["Squats", "Leg Press", "Leg Extensions"],
  },
  {
    title: "Cardio",
    duration: 30,
    exerciseList: ["Running", "Swimming", "Biking"],
  },
  {
    title: "Back & Bicep",
    duration: 60,
    exerciseList: ["Pull Ups", "Bicep Curls"],
  },
  {
    title: "Leg Day",
    duration: 60,
    exerciseList: ["Squats", "Leg Press", "Leg Extensions"],
  },
];

export default function WorkoutsList() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <ul className="flex flex-col items-center space-y-4 my-4 sm:m-10">
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            workout={{
              ...workout,
              exerciseList: workout.exerciseList as [string, ...string[]],
            }}
          />
        ))}
      </ul>
    </div>
  );
}
