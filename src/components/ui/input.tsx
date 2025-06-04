import { cn } from "@/lib/utils/cn";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type InputProps = {
  type?: HTMLInputTypeAttribute | undefined;
  label?: string;
  placeholder?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type = "text",
  label,
  className,
  ...props
}: InputProps) {
  const inputName = props.name || "";
  const displayLabel =
    label || `${inputName.charAt(0).toUpperCase()}${inputName.slice(1)}`;

  return (
    <div className={cn("flex flex-col flex-grow space-y-1", className)}>
      <label
        htmlFor={inputName}
        className="text-md font-semibold text-gray-700"
      >
        {displayLabel}
      </label>
      <input
        type={type}
        id={inputName}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-600 bg-white text-gray-900 shadow-sm transition duration-300"
        {...props}
      />
    </div>
  );
}
