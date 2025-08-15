import { useState } from "react";

export function useWorkoutCard() {
  const [expanded, setExpanded] = useState(false);

  function toggleWorkoutCard() {
    setExpanded((prev) => !prev);
  }

  return { expanded, toggleWorkoutCard };
}
