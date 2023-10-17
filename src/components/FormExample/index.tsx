import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  text: string;
}

const initialFormValues: FormValues = {
  email: "",
  password: "",
  passwordConfirm: "",
  text: "",
};

const FormExample = () => {
  const methods = useForm<FormValues>({ defaultValues: initialFormValues });
  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
};

export default FormExample;
