import { navLinks } from "@/lib/navLinks";
import NavLink from "./nav-link";

export default function NavLinkList() {
  return (
    <nav>
      <ul className="flex flex-col m-16 space-y-10 text-xl">
        {navLinks.map(({ icon: Icon, name, path }) => (
          <NavLink key={path} Icon={Icon} name={name} path={path} />
        ))}
      </ul>
    </nav>
  );
}
