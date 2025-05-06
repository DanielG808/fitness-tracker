"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export default function MenuButton() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
      <button
        data-testid="menu-button"
        className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronLeftIcon className="w-10 h-10" />
      </button>
  );
}
