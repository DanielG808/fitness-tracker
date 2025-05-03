import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex justify-center bg-primary p-3 rounded-md text-center text-background hover:text-white hover:bg-primary-dark duration-300 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
