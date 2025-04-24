"use client";

import MenuButton from "./menu-button";
import NavLinkList from "./nav-link-list";
import Footer from "./footer";
import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";

export default function NavigationPanel() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <aside
      data-testid="navigation-panel"
      className={`flex flex-col bg-foreground-dark transition-all duration-300 overflow-hidden ${
        open
          ? "w-1/5 min-w[10rem] shadow-[4px_0_10px_rgba(0,0,0,0.6)]"
          : "w-0 min-w-0 p-0"
      }`}
    >
      <div className="flex items-center justify-end h-20 pr-2">
        <MenuButton open={open} setOpen={setOpen} />
      </div>
      <div className="my-12">
        <NavLinkList />
      </div>
      <Footer />
    </aside>
  );
}
