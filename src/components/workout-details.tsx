import H2 from "./ui/h2";

export default function WorkoutDetails({ title, duration, workoutList }) {
  return (
    <div className="flex flex-col justify-between h-full">
        <header className="flex items-center">
            <H2 className="text-xl font-semibold">{title}</H2>
            <span className="pt-1 pl-2 font-semibold text-black/75">{`- ${duration} mins`}</span>
        </header>
        <ul className="flex space-x-1 text-black/75">
          {workoutList.map((workout, index) => (
            <li key={index}>
              {workout}
              {index < workoutList.length - 1 && ','}
            </li>
          ))}
        </ul>
    </div>
  )
}
