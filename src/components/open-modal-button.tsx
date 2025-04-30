"use client"

import { useState } from "react";
import Button from "./ui/button";
import Modal from "./ui/modal";

export default function OpenModalButton() {
    const [open, setOpen] = useState(false)

    function openModal() {
        setOpen(true)
    }

  return (
    <>
        <Button onClick={openModal} >+ New Workout</Button>
        {open && (
            <Modal />
        )}
    </>
  )
}
