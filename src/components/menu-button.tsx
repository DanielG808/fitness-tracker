import { ChevronLeftIcon } from "@heroicons/react/16/solid";

type MenuButtonProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function MenuButton({ open, setOpen }: MenuButtonProps) {
  return (
    <div className="flex items-center justify-end h-20 pr-2">
      <button
        data-testid="menu-button"
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronLeftIcon className="w-10 h-10" />
      </button>
    </div>
  );
}
