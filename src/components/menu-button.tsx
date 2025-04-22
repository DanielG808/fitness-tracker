import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";

type MenuButtonProps ={
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <button data-testid="menu-button" className="ml-auto cursor-pointer" onClick={() => setOpen(!open)}>
      {open ? (
        <XMarkIcon data-testid="close-icon" className="w-8 h-8" />
      ) : (
        <Bars3Icon data-testid="open-icon" className="w-10 h-10" />
      )}
    </button>
  )
}
