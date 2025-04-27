import { cn } from "@/lib/utils/cn";
import CopyrightStatement from "./copyright-statement";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "mt-auto text-background/55 text-xs text-center py-2 space-y-1",
        className
      )}
    >
      <CopyrightStatement />
    </footer>
  );
}
