import XButton from "../x-button";

type ModalProps = {
    closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

        <section className="bg-white p-6 rounded-2xl relative">
            <XButton onClick={closeModal} />
            Modal
            
        </section>
    </div>
  )
}
