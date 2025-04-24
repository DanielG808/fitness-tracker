"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";

export default function NavigationPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useNavigationPanelContext();

  return (
    <aside
      data-testid="navigation-panel"
      className={`flex flex-col bg-foreground-dark transition-all duration-300 overflow-hidden ${
        open
          ? "w-1/5 min-w[10rem] shadow-[4px_0_10px_rgba(0,0,0,0.6)]"
          : "w-0 min-w-0 p-0"
      }`}
    >
      {children}
    </aside>
  );
}
