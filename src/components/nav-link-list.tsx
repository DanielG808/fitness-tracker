import { navLinks } from "@/lib/navLinks";
import NavLink from "./nav-link";

export default function NavLinkList() {
  return (
    <nav>
      <ul className="flex flex-col m-16 space-y-10 text-xl">
        {navLinks.map(({ icon: Icon, name, path }) => (
          <li key={path} className="flex items-center">
            <Icon className="w-8 h-8" />
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
