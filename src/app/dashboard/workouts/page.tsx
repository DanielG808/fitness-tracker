import PageHeader from "@/components/page-header";
import Button from "@/components/ui/button";
import WorkoutsList from "@/components/workouts-list";

export default function WorkoutsPage() {
  return <section className="flex flex-col items-center text-black p-4">
    <PageHeader title="Workouts" action={<Button>+ New Workout</Button>} />
    <WorkoutsList />
  </section>;
}
