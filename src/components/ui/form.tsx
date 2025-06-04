type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col text-black space-y-2">
      {children}
    </form>
  );
}
