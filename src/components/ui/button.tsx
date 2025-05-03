import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  style: ButtonVariant;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const baseStyles =
  "flex justify-center p-3 rounded-md text-center duration-300 cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:text-white hover:bg-primary-dark",
  secondary:
    "bg-background-light/65 text-black/75 hover:bg-background-light hover:text-black/75",
};

export default function Button({
  style = "primary",
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[style], className)}
    >
      {children}
    </button>
  );
}
