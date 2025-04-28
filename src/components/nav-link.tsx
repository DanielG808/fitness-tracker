import { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

type NavLinkProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  path: string;
  testId: string;
  closePanel: () => void;
};

export default function NavLink({
  Icon,
  name,
  path,
  testId,
  closePanel,
}: NavLinkProps) {
  const isMobile = useIsMobile();

  function handleClick() {
    if (isMobile) {
      closePanel();
    }
  }

  return (
    <li data-testid={testId} key={path}>
      <Link
        href={path}
        onClick={handleClick}
        className="flex items-center w-full h-16 px-3 space-x-4 rounded-full hover:bg-white/15 transition-all duration-300 cursor-pointer whitespace-nowrap"
      >
        <Icon className="w-10 h-10 shrink-0" />
        <span>{name}</span>
      </Link>
    </li>
  );
}
