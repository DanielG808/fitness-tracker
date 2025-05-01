"use client"

import Button from "./ui/button";
import Modal from "./ui/modal";
import { useModal } from "@/lib/hooks/useModal";

export default function OpenModalButton() {
  const { open, openModal, closeModal} = useModal()

  return (
    <>
        <Button onClick={openModal} >+ New Workout</Button>
        {open && (
            <Modal open={open} closeModal={closeModal} />
        )}
    </>
  )
}
