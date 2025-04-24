"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function HamburgerButton() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <button className="cursor-pointer" onClick={() => setOpen(!open)}>
      <Bars3Icon className={`h-10 w-10 ${open ? "hidden" : null}`} />
    </button>
  );
}
