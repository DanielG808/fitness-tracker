import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={cn(`text-5xl ${bebasNeue.className}`, className)}>
      Fitness <span className="italic">Tracker</span>
    </h1>
  );
}
