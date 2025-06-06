import Button from "./ui/button";

type FormButtonsProps = {
  closeModal: () => void;
};

export default function FormButtons({ closeModal }: FormButtonsProps) {
  return (
    <>
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
