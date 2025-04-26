import { ComponentType, SVGProps } from "react";
import Link from "next/link";

type NavLinkProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  path: string;
  testId: string;
};

export default function NavLink({ Icon, name, path, testId }: NavLinkProps) {
  return (
    <li
      data-testid={testId}
      key={path}
      className="flex items-center w-full h-16 px-3 space-x-4 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer"
    >
      <Icon className="w-10 h-10 shrink-0" />
      <Link className="whitespace-nowrap" href={path}>
        {name}
      </Link>
    </li>
  );
}
