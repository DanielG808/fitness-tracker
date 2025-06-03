import { useModal } from "@/lib/hooks/useModal";
import Modal from "./ui/modal";
import XButton from "./x-button";
import DeleteForm from "./delete-form";

export default function DeleteModal({ id, title }) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <XButton onClick={openModal} />

      {open && (
        <Modal open={open} closeModal={closeModal} heading="Delete Workout">
          <DeleteForm id={id} title={title} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
