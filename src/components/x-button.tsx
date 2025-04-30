import { XMarkIcon } from "@heroicons/react/16/solid";
import Button from "./ui/button";

type XButtonProps = {
  onClick: () => void;
}

export default function XButton({ onClick }: XButtonProps) {
  return (
        <Button onClick={onClick} className="flex items-center bg-white p-0 text-background-light hover:text-background-dark hover:bg-white">
            <XMarkIcon className="h-6 w-6" />
        </Button>
  )
}
