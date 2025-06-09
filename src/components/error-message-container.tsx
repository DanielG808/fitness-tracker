import { FieldError, FieldErrors } from "react-hook-form";

type ErrorMessageContainerProps = {
  errors: FieldErrors;
};

export default function ErrorMessageContainer({
  errors,
}: ErrorMessageContainerProps) {
  const titleError = errors?.title as FieldError | undefined;

  return (
    <div>
      <p>{titleError?.message}</p>
    </div>
  );
}
