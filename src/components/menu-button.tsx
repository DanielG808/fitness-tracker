import { ChevronLeftIcon } from "@heroicons/react/16/solid";

type MenuButtonProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <button
      data-testid="menu-button"
      className="flex items-center cursor-pointer ml-auto"
      onClick={() => setOpen(!open)}
    >
      <ChevronLeftIcon className="w-10 h-10" />
    </button>
  );
}
