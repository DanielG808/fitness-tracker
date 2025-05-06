"use client"

import { bebasNeue } from "@/lib/constants/fonts";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type LogoProps = {
  testId: string;
  closePanel?: () => void;
  className?: string;
};

export default function Logo({ testId, closePanel, className }: LogoProps) {
  const isMobile = useIsMobile()

  function handleClick() {
    if (isMobile && closePanel) {
      closePanel()
    }
  }

  return (
    <h1
      data-testid={testId}
      className={cn(
        `text-4xl sm:text-5xl whitespace-nowrap ${bebasNeue.className}`,
        className
      )}
    >
      <Link href={"/dashboard"} onClick={handleClick}>
        Fitness <span className="italic">Tracker</span>
      </Link>
    </h1>
  );
}
