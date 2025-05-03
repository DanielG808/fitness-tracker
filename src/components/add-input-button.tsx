import Button from "./ui/button";

type AddInputButtonProps = {
  text: string;
}

export default function AddInputButton({ text }: AddInputButtonProps) {
  return (
    <Button className="bg-background-light w-fit text-black/45 text-sm h-8 my-2 hover:bg-background-dark">{text}</Button>
  )
}
