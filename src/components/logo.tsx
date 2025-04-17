import { bebasNeue } from "@/lib/fonts";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={cn(`text-5xl ${bebasNeue.className}`, className)}>
      <Link href={"/"}>
        Fitness <span className="italic">Tracker</span>
      </Link>
    </h1>
  );
}
