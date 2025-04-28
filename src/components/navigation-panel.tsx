"use client";

import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";
import Footer from "./footer";
import MenuButton from "./menu-button";
import NavLinkList from "./nav-link-list";

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
      <MenuButton />
      <NavLinkList closePanel={() => setOpen(false)} />
      <Footer />
    </aside>
  );
}
