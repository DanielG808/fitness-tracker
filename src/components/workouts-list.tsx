import WorkoutCard from "./workout-card";

const workouts = [
  {
    title: "Full Body Workout",
    duration: 60,
    createdAt: "2025-05-28T21:41:03.229Z",
    updatedAt: "2025-05-28T21:41:03.229Z",
    exerciseList: [
      {
        id: "cmb8gz99x00012ovcoxd2cfsj",
        name: "Squats",
        minutes: 15,
        reps: 20,
      },
      {
        id: "cmb8gz99x00022ovcknlatq83",
        name: "Plank",
        minutes: 10,
        reps: null,
      },
      {
        id: "cmb8gz99x00032ovc5bc9zd3l",
        name: "Jumping Jacks",
        minutes: 5,
        reps: 50,
      },
    ],
  },
  {
    title: "Upper Body Strength",
    duration: 45,
    createdAt: "2025-05-29T13:39:23.454Z",
    updatedAt: "2025-05-29T13:39:23.454Z",
    exerciseList: [
      {
        id: "cmb9f7o3x0001rn8816y397us",
        name: "Push-ups",
        minutes: 10,
        reps: 30,
      },
      {
        id: "cmb9f7o3x0002rn88bojd1a6m",
        name: "Dumbbell Rows",
        minutes: 15,
        reps: 12,
      },
      {
        id: "cmb9f7o3x0003rn88q9rzhair",
        name: "Shoulder Press",
        minutes: 10,
        reps: 15,
      },
    ],
  },
  {
    title: "Cardio Blast",
    duration: 30,
    createdAt: "2025-05-29T13:46:04.606Z",
    updatedAt: "2025-05-29T13:46:04.606Z",
    exerciseList: [
      {
        id: "cmb9fg9mm0001rnc8pcvhecz2",
        name: "Burpees",
        minutes: 10,
        reps: 25,
      },
      {
        id: "cmb9fg9mm0002rnc89sqx7uwd",
        name: "High Knees",
        minutes: 10,
        reps: null,
      },
      {
        id: "cmb9fg9mm0003rnc838excmom",
        name: "Mountain Climbers",
        minutes: 10,
        reps: 40,
      },
    ],
  },
];

export default function WorkoutsList() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <ul className="flex flex-col items-center space-y-4 my-4 sm:m-10">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      </ul>
    </div>
  );
}
