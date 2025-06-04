import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "warning";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const baseStyles =
  "flex justify-center items-center p-3 rounded-md w-auto duration-300 cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:text-white hover:bg-primary-dark",
  secondary:
    "bg-background-light/65 text-black/75 hover:bg-background-light hover:text-black/75",
  warning: "bg-red-600 text-background hover:text-white hover:bg-red-800",
};

export default function Button({
  type = "button",
  variant = "primary",
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}
