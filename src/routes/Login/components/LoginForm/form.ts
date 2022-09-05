import * as yup from "yup";

export interface LoginFormValues {
  name: string;
  email: string;
}

export function getInitialValues(
  initialValues?: Partial<LoginFormValues>
): LoginFormValues {
  return {
    name: "",
    email: "",
    ...initialValues
  };
}

export const validationSchema: yup.SchemaOf<LoginFormValues> = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email()
});
