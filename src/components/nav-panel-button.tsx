import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";

type NavPanelButtonProps ={
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavPanelButton({ open, setOpen }: NavPanelButtonProps) {
  return (
    <button className="ml-auto cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-10 h-10" />
        )}
      </button>
  )
}
