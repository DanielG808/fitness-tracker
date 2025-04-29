import { cn } from "@/lib/utils/cn";

type H2Props = {
    children: React.ReactNode;
    className: string
}

export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={cn("text-2xl font-bold", className)}>{children}</h2>
  )
}
