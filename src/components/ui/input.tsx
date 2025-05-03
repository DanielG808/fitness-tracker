type InputProps = {
  name: string;
  placeholder?: string;
};

export default function Input({ name, placeholder }: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label 
        htmlFor={name} 
        className="text-md font-semibold text-gray-700">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}:`}
        </label>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-600 bg-white text-gray-900 shadow-sm transition duration-300"
      />
    </div>
  );
}
