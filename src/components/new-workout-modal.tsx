"use client";

import NewWorkoutForm from "./new-workout-form";
import Button from "./ui/button";
import Modal from "./ui/modal";
import { useModal } from "@/lib/hooks/useModal";

type OpenModalButtonProps = {
  buttonText: string;
  className?: string;
};

export default function NewWorkoutModal({
  buttonText,
  className,
}: OpenModalButtonProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal} className={className}>
        {buttonText}
      </Button>
      {open && (
        <Modal open={open} closeModal={closeModal} heading="Add New Workout">
          <NewWorkoutForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
