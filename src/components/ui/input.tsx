import { cn } from "@/lib/utils/cn";

type InputProps = {
  name: string;
  placeholder?: string;
  className?: string;
};

export default function Input({ name, placeholder, className }: InputProps) {
  return (
    <div className={cn("flex flex-col flex-grow space-y-1", className)}>
      <label htmlFor={name} className="text-md font-semibold text-gray-700">
        {`${name.charAt(0).toUpperCase()}${name.slice(1)}:`}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-600 bg-white text-gray-900 shadow-sm transition duration-300"
      />
    </div>
  );
}
