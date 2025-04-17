import NavLink from "./nav-link";
import {
  CalendarIcon,
  FireIcon,
  IdentificationIcon,
  Cog8ToothIcon,
} from "@heroicons/react/16/solid";

const navLinks = [
  {
    icon: <CalendarIcon className="w-8 h-8" />,
    name: "Workout Calendar",
    path: "/",
  },
  {
    icon: <FireIcon className="w-8 h-8" />,
    name: "Workouts",
    path: "/workouts",
  },
  {
    icon: <IdentificationIcon className="w-8 h-8" />,
    name: "Profile",
    path: "/profile",
  },
  {
    icon: <Cog8ToothIcon className="w-8 h-8" />,
    name: "Settings",
    path: "/settings",
  },
];

export default function NavLinkList() {
  return (
    <nav>
      <ul className="flex flex-col m-20 space-y-10">
        {navLinks.map(({ icon, name, path }) => (
          <li key={path} className="flex items-center">
            {icon}
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
