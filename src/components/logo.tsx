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
      className={cn(`text-5xl ${bebasNeue.className}`, className)}
    >
      <Link href={"/dashboard"}>
        Fitness <span className="italic">Tracker</span>
      </Link>
    </h1>
  );
}
