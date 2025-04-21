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
    <li data-testid={testId} key={path} className="flex items-center space-x-5">
      <Icon className="w-10 h-10" />
      <Link href={path}>{name}</Link>
    </li>
  );
}
