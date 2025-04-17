import { ComponentType, SVGProps } from "react";
import Link from "next/link";

type NavLinkProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  path: string;
};

export default function NavLink({ Icon, name, path }: NavLinkProps) {
  return (
    <li key={path} className="flex items-center space-x-5">
      <Icon className="w-10 h-10" />
      <Link href={path}>{name}</Link>
    </li>
  );
}
