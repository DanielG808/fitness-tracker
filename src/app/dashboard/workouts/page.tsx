import NewWorkoutButton from "@/components/new-workout-button";
import PageHeader from "@/components/page-header";
import WorkoutsList from "@/components/workouts-list";

export default function WorkoutsPage() {
  return <section className="flex flex-col items-center text-black p-4">
      <PageHeader title="Workouts" action={<NewWorkoutButton />} />
      <WorkoutsList />
    </section>
}
