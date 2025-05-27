import CalendarGrid from "@/components/calendar-grid";
import PageHeader from "@/components/page-header";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-black p-4">
      <PageHeader title="Calendar" />
      <CalendarGrid />
    </section>
  );
}
