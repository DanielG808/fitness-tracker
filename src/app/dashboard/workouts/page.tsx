import PageHeader from "@/components/page-header";
import Button from "@/components/ui/button";

export default function WorkoutsPage() {
  return <section className="text-black p-4">
    <PageHeader title="Workouts" action={<Button>+ New Workout</Button>} />
  </section>;
}
