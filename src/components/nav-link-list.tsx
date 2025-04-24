import { navLinks } from "@/lib/constants/navLinks";
import NavLink from "./nav-link";

export default function NavLinkList() {
  return (
    <nav>
      <ul className="flex flex-col mx-10 mt-14 space-y-10 text-2xl">
        {navLinks.map(({ icon: Icon, name, path }) => (
          <NavLink
            testId={`nav-${path.replace(/\//g, "") || "home"}`}
            key={path}
            Icon={Icon}
            name={name}
            path={path}
          />
        ))}
      </ul>
    </nav>
  );
}
