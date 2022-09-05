import { useField } from "formik";
import { ComponentProps, useId } from "react";

interface FormInputProps extends ComponentProps<"input"> {
  label: string;
  name: string;
}

export default function FormInput({ label, ...inputProps }: FormInputProps) {
  const id = useId();
  const [field, meta] = useField(inputProps.name);

  const hasError = !!(meta.touched && meta.error);
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        {...inputProps}
        {...field}
        id={id}
        aria-invalid={hasError}
        aria-errormessage={hasError ? errorId : undefined}
      />

      {hasError && <span id={errorId}>{meta.error}</span>}
    </div>
  );
}
