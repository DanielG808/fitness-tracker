"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";
import NavLinkList from "./nav-link-list";
import Logo from "./logo";

export default function NavigationPanel() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`flex flex-col fixed top-0 left-0 h-full w-1/5 bg-foreground p-2 transform transition-transform duration-300  ${
        open
          ? "translate-x-0 shadow-[4px_0_10px_rgba(0,0,0,0.6)]"
          : "-translate-x-5/6 shadow-[4px_0_10px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="flex items-center">
        <Logo />
        <button className="ml-auto" onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-10 h-10" />
          )}
        </button>
      </div>
      <NavLinkList />
    </aside>
  );
}
