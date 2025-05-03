import NewWorkoutForm from "@/components/new-workout-form";
import OpenModalButton from "@/components/open-modal-button";
import PageHeader from "@/components/page-header";
import WorkoutsList from "@/components/workouts-list";

export default function WorkoutsPage() {
  return (
    <section className="flex flex-col items-center text-black p-4">
      <PageHeader
        title="Workouts"
        action={
          <OpenModalButton
            text="+ New Workout"
            className="mt-6 sm:mt-0"
            modalContent={<NewWorkoutForm />}
          />
        }
      />
      <WorkoutsList />
    </section>
  );
}
