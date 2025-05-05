"use client";

import { cn } from "@/lib/utils/cn";
import H2 from "./ui/h2";
import NewWorkoutModal from "./new-workout-modal";

type PageHeaderProps = {
  title: string;
  action: boolean;
  className?: string;
};

export default function PageHeader({
  title,
  action = false,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col sm:flex-row h-full justify-between items-start w-full",
        className
      )}
    >
      <H2>{title}</H2>
      {action && (
        <NewWorkoutModal
          buttonText="+ New Workout"
          className="mt-6 sm:mt-0 w-full sm:w-auto"
        />
      )}
    </header>
  );
}
