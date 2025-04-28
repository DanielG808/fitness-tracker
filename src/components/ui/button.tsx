type ButtonProps = {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary p-3 rounded-md text-center text-background hover:text-white hover:bg-primary-dark duration-300 cursor-pointer">{children}</button>
  )
}
