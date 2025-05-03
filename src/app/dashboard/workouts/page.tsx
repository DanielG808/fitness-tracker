import NewWorkoutModal from "@/components/new-workout-modal";
import PageHeader from "@/components/page-header";
import WorkoutsList from "@/components/workouts-list";

export default function WorkoutsPage() {
  return (
    <section className="flex flex-col items-center text-black p-4">
      <PageHeader
        title="Workouts"
        action={
          <NewWorkoutModal
            buttonText="+ New Workout"
            className="mt-6 sm:mt-0 w-full sm:w-auto"
          />
        }
      />
      <WorkoutsList />
    </section>
  );
}
