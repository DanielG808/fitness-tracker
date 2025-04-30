import XButton from "../x-button";

type ModalProps = {
    closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50">
        <div className="flex items-center justify-center absolute inset-0">
            <section className="bg-white w-3/5 p-6 rounded-2xl relative">
                <XButton onClick={closeModal} />
                Modal
            </section>
        </div>
    </div>
  )
}
