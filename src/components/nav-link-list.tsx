import { navLinks } from "@/lib/constants/navLinks";
import NavLink from "./nav-link";

export default function NavLinkList() {
  return (
    <nav>
      <ul className="flex flex-col mx-16 mt-10 sm:mx-6 md:mx-12 xl:mx-16 space-y-5 text-xl transition-all">
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
