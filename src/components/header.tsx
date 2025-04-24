import HamburgerButton from "./hamburger-button";

export default function Header() {
  return (
    <header className="bg-foreground-light flex flex-col justify-center items-start h-20 w-full">
      <HamburgerButton />
    </header>
  );
}
