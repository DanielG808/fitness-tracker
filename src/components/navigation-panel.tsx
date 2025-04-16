"use client";

import { useState } from "react";

export default function NavigationPanel() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`flex flex-col fixed top-0 left-0 h-full w-1/5 bg-foreground p-2 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-4/5"
      }`}
    >
      <button className="ml-auto" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
    </aside>
  );
}
