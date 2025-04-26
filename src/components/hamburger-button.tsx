"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function HamburgerButton() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <button
      className={`flex justify-center items-center w-16 h-16 rounded-full hover:bg-white/15 cursor-pointer ${
        open ? "hidden" : null
      }`}
      onClick={() => setOpen(!open)}
    >
      <Bars3Icon className={`h-10 w-10 `} />
    </button>
  );
}
