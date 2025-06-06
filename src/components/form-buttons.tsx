import Button from "./ui/button";

type FormButtonsProps = {
  submitButtonText: string;
  isSubmitting: boolean;
  closeModal: () => void;
};

export default function FormButtons({
  submitButtonText,
  isSubmitting,
  closeModal,
}: FormButtonsProps) {
  const loadingButtonText = `${submitButtonText.split(" ")[0]}ing...`;

  return (
    <>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? loadingButtonText : submitButtonText}
      </Button>
      <Button disabled={isSubmitting} onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
