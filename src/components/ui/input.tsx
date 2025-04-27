type InputProps = {
  name: string;
  placeholder?: string;
};

export default function Input({ name, placeholder }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{`${name.toUpperCase()}:`}</label>
      <input
        placeholder={placeholder}
        className="border-1 border-black/85 bg-foreground-light/5 rounded-md px-2 text-opacity-85"
      />
    </>
  );
}
