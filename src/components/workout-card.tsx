import { Workout } from '@/lib/validations/workoutSchema';
import WorkoutDetails from './workout-details'
import XButton from './x-button';

type WorkoutCardProps = {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const { title, duration, workoutList } = workout

  return (
    <li className="bg-white w-full md:w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-xl duration-300">
      <article className="flex justify-between items-center h-full w-full">
          <WorkoutDetails title={title} duration={duration} workoutList={workoutList} />
          <XButton />
      </article>
    </li>
  )
}
