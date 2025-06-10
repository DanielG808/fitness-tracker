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
      <p>
        {errors?.exerciseList?.[0].name || errors?.exerciseList?.[0].minutes
          ? "At least one exercise is required."
          : null}
      </p>
    </div>
  );
}
