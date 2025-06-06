import Button from "./ui/button";

type FormButtonsProps = {
  submitButtonText: string;
  closeModal: () => void;
};

export default function FormButtons({
  submitButtonText,
  closeModal,
}: FormButtonsProps) {
  return (
    <>
      <Button type="submit">{submitButtonText}</Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
