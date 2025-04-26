import { bebasNeue } from "@/lib/constants/fonts";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type LogoProps = {
  testId: string;
  className?: string;
};

export default function Logo({ testId, className }: LogoProps) {
  return (
    <h1
      data-testid={testId}
      className={cn(
        `text-4xl sm:text-5xl whitespace-nowrap ${bebasNeue.className}`,
        className
      )}
    >
      <Link href={"/"}>
        Fitness <span className="italic">Tracker</span>
      </Link>
    </h1>
  );
}
