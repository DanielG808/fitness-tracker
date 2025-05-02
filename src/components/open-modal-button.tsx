"use client";

import Button from "./ui/button";
import Modal from "./ui/modal";
import { useModal } from "@/lib/hooks/useModal";

type OpenModalButtonProps = {
  text: string;
};

export default function OpenModalButton({ text }: OpenModalButtonProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal}>{text}</Button>
      {open && <Modal open={open} closeModal={closeModal} />}
    </>
  );
}
