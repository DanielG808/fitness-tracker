import { useModal } from "@/lib/hooks/useModal";
import Modal from "./ui/modal";
import XButton from "./x-button";
import DeleteForm from "./delete-form";
import { TrashIcon } from "@heroicons/react/16/solid";

type DeleteModalProps = {
  id: string;
  title: string;
};

export default function DeleteModal({ id, title }: DeleteModalProps) {
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
