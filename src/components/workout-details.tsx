import H2 from "./ui/h2";

export default function WorkoutDetails() {
  return (
    <div className="flex flex-col justify-between h-full">
        <header className="flex items-center">
            <H2 className="text-xl font-semibold">Cardio</H2>
            <span className="pt-1 pl-2 font-semibold text-black/75">- 30 mins</span>
        </header>
        <p className="text-black/75">Running, swimming, biking</p>
    </div>
  )
}
