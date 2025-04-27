import Input from "./ui/input";

const loginFormInputs = [
  {
    name: "username",
    placeholder: "Enter your username...",
  },
  {
    name: "password",
    placeholder: "Enter your password...",
  },
];

export default function LoginForm() {
  return (
    <form className="flex flex-col justify-center items-center h-full w-full">
      {loginFormInputs.map(({ name, placeholder }) => (
        <Input key={name} name={name} placeholder={placeholder} />
      ))}
    </form>
  );
}
