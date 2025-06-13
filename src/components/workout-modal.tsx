"use client";

import WorkoutForm from "./workout-form";
import Button from "./ui/button";
import Modal from "./ui/modal";
import { useModal } from "@/lib/hooks/useModal";
import { ReactNode } from "react";
import { WorkoutFormTypes } from "@/lib/constants/workoutFormTypes";

type OpenModalButtonProps = {
  action: WorkoutFormTypes;
  icon?: ReactNode;
  buttonText?: string;
  buttonVariant?: ButtonVariants;
  className?: string;
};

export default function WorkoutModal({
  action,
  icon,
  buttonText,
  buttonVariant = "primary",
  className,
}: OpenModalButtonProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Button variant={buttonVariant} onClick={openModal} className={className}>
        {icon ?? buttonText}
      </Button>
      {open && (
        <Modal open={open} closeModal={closeModal} heading={"Add New Workout"}>
          <WorkoutForm action={action} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
