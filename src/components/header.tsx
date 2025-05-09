import HamburgerButton from "./hamburger-button";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="bg-foreground-light flex justify-start items-center h-20 shrink-0 px-2 shadow-[4px_0_10px_rgba(0,0,0,0.6)]">
      <HamburgerButton />
      <Logo testId="nav-panel-logo" className="pl-4" />
    </header>
  );
}
