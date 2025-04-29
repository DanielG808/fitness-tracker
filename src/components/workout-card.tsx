import CloseButton from './close-button'
import WorkoutDetails from './workout-details'

export default function WorkoutCard({ workout }) {
  const { title, duration, workoutList } = workout

  return (
    <article className="flex justify-between items-center bg-white w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-lg duration-300">
        <WorkoutDetails title={title} duration={duration} workoutList={workoutList} />
        <CloseButton />
    </article>
  )
}
