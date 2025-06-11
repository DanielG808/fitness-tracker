"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import Button from "./ui/button";

type XButtonProps = {
  onClick: () => void;
};

export default function XButton({ onClick }: XButtonProps) {
  return (
    <Button variant="icon" onClick={onClick}>
      <XMarkIcon className="h-6 w-6" />
    </Button>
  );
}
