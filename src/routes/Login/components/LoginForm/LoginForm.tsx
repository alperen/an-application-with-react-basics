import { FormikProvider, useFormik } from "formik";
import Box from "../../../../components/Box";
import FormInput from "../../../../components/formik/FormInput/FormInput";
import { LoginFormValues, getInitialValues, validationSchema } from "./form";

interface LoginFormProps {
  initialValues?: Partial<LoginFormValues>;
  onSubmit: (values: LoginFormValues) => void;
}

export default function LoginForm({ initialValues, onSubmit }: LoginFormProps) {
  const formik = useFormik<LoginFormValues>({
    initialValues: getInitialValues(initialValues),
    onSubmit,
    validationSchema
  });

  return (
    <FormikProvider value={formik}>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <FormInput name="name" label="Name" />

          <FormInput name="email" label="Email" />

          <button type="submit">GO</button>
        </form>
      </Box>
    </FormikProvider>
  );
}
