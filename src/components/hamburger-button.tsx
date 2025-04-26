"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function HamburgerButton() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <button
      className={`flex justify-center items-center w-8 h-8 sm:w-14 sm:h-14 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer ${
        open ? "hidden" : null
      }`}
      onClick={() => setOpen(!open)}
    >
      <Bars3Icon className="h-8 w-8 sm:h-10 sm:w-10" />
    </button>
  );
}
