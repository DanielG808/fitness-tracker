"use client";

import Footer from "./footer";
import Logo from "./logo";
import MenuButton from "./menu-button";
import NavLinkList from "./nav-link-list";
import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";

export default function NavigationPanel() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <aside
      data-testid="navigation-panel"
      className={`flex flex-col bg-foreground-dark transition-all duration-300 overflow-hidden ${
        open
          ? `w-screen h-screen 
          sm:w-1/3 sm:min-w-[12rem] sm:h-auto
          xl:w-1/5 xl:min-w-[10rem]
          shadow-[4px_0_10px_rgba(0,0,0,0.6)]`
          : "w-0 min-w-0 p-0"
      }`}
    >
      <div className="flex items-center justify-between sm:justify-end h-20 p-2">
        <Logo testId="nav-panel-logo" closePanel={() => setOpen(false)} className="p-4 sm:hidden" />
        <MenuButton />
      </div>
      <NavLinkList closePanel={() => setOpen(false)} />
      <Footer />
    </aside>
  );
}
