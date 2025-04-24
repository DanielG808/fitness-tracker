import HamburgerButton from "./hamburger-button";

export default function Header() {
  return (
    <header className="bg-foreground-light flex justify-start items-center h-20">
      <HamburgerButton />
    </header>
  );
}
