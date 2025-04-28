import {
  CalendarIcon,
  Cog8ToothIcon,
  FireIcon,
  IdentificationIcon,
} from "@heroicons/react/16/solid";

export const navLinks = [
  {
    icon: CalendarIcon,
    name: "Calendar",
    path: "/dashboard",
  },
  {
    icon: FireIcon,
    name: "Workouts",
    path: "/dashboard/workouts",
  },
  {
    icon: IdentificationIcon,
    name: "Profile",
    path: "/dashboard/profile",
  },
  {
    icon: Cog8ToothIcon,
    name: "Settings",
    path: "/dashboard/settings",
  },
];
