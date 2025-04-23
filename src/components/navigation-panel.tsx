"use client";

import MenuButton from "./menu-button";
import Logo from "./logo";
import NavLinkList from "./nav-link-list";
import Footer from "./footer";
import { useNavigationPanelContext } from "@/lib/hooks/useNavigationPanelContext";

export default function NavigationPanel() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <aside
      data-testid="navigation-panel"
      className={`flex flex-col fixed top-0 left-0 h-full w-1/5 bg-foreground p-2 transform transition-transform duration-300  ${
        open
          ? "translate-x-0 shadow-[4px_0_10px_rgba(0,0,0,0.6)]"
          : "-translate-x-5/6 shadow-[4px_0_10px_rgba(0,0,0,0.4)]"
      }`}
    >
      <MenuButton open={open} setOpen={setOpen} />
      <div className="my-12 flex-1">
        <Logo testId="nav-panel-logo" className="ml-5" />
        <NavLinkList />
      </div>
      <Footer />
    </aside>
  );
}
