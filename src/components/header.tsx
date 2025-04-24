import HamburgerButton from "./hamburger-button";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="bg-foreground-light flex justify-start items-center h-20 pl-5">
      <HamburgerButton />
      <Logo testId="nav-panel-logo" className="ml-5 " />
    </header>
  );
}
