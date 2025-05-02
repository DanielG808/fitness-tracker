import { useState, useEffect } from "react";

export function usePageContentRect() {
  const [mounted, setMounted] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    setMounted(true);
    const container = document.getElementById("page-content-container");
    if (container) {
      setContainerRect(container.getBoundingClientRect());
    }
  }, []);

  return { mounted, containerRect };
}
