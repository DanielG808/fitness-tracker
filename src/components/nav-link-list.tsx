import { navLinks } from "@/lib/constants/navLinks";
import NavLink from "./nav-link";

type NavLinkListProps = {
  closePanel: () => void;
};

export default function NavLinkList({ closePanel }: NavLinkListProps) {
  return (
    <nav>
      <ul className="flex flex-col mt-5 mx-16 sm:mx-6 mt-7 md:mx-12 mt-10 xl:mx-16 space-y-5 text-xl transition-all">
        {navLinks.map(({ icon: Icon, name, path }) => (
          <NavLink
            testId={`nav-${path.replace(/\//g, "") || "home"}`}
            key={path}
            Icon={Icon}
            name={name}
            path={path}
            closePanel={closePanel}
          />
        ))}
      </ul>
    </nav>
  );
}
