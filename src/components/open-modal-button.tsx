"use client";

import Button from "./ui/button";
import Modal from "./ui/modal";
import { useModal } from "@/lib/hooks/useModal";

type OpenModalButtonProps = {
  text: string;
  className?: string;
};

export default function OpenModalButton({
  text,
  className,
}: OpenModalButtonProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal} className={className}>
        {text}
      </Button>
      {open && <Modal open={open} closeModal={closeModal} />}
    </>
  );
}
