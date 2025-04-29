import { cn } from "@/lib/utils/cn"

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={cn("bg-primary p-3 rounded-md text-background hover:text-white hover:bg-primary-dark duration-300 cursor-pointer", className)}>{children}</button>
  )
}
