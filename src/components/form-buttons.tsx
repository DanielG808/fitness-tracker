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
  console.log(isSubmitting);

  return (
    <>
      <Button disabled={isSubmitting} type="submit">
        {submitButtonText}
      </Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
