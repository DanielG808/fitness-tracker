import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariants;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const baseStyles =
  "flex justify-center items-center p-3 rounded-md w-auto duration-300 cursor-pointer";

const variantStyles: Record<ButtonVariants, string> = {
  primary: "bg-primary text-background hover:text-white hover:bg-primary-dark",
  secondary:
    "bg-background-light/65 text-black/75 hover:bg-background-light hover:text-black/75",
  warning: "bg-red-600 text-background hover:text-white hover:bg-red-800",
  icon: "flex items-center bg-white p-0 w-auto text-background-light hover:text-background-dark hover:bg-white",
};

const disabledStyles = "opacity-50 pointer-events-none";

export default function Button({
  type = "button",
  disabled = false,
  variant = "primary",
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        disabled && disabledStyles,
        className
      )}
    >
      {children}
    </button>
  );
}
