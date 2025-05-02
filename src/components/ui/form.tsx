type FormProps = {
    children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  return (
    <form className="flex flex-col text-black">
        {children}
    </form>
  )
}
