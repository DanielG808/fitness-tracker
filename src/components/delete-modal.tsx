import { useModal } from "@/lib/hooks/useModal";
import Modal from "./ui/modal";
import XButton from "./x-button";
import DeleteForm from "./delete-form";
import Button from "./ui/button";
import { TrashIcon } from "@heroicons/react/16/solid";

type DeleteModalProps = {
  id: string;
  title: string;
};

export default function DeleteModal({ id, title }: DeleteModalProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Button
        onClick={openModal}
        variant="icon"
        // className="flex items-center bg-white p-0 w-auto text-background-light hover:text-background-dark hover:bg-white"
      >
        <TrashIcon className="h-5 w-5" />
      </Button>

      {open && (
        <Modal open={open} closeModal={closeModal} heading="Delete Workout">
          <DeleteForm id={id} title={title} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
