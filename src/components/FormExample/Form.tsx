import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormValues } from ".";
import FormView from "./FormView";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import InputPasswordConfirm from "./InputPasswordConfirm";
import Textarea from "./Textarea";

const Form = () => {
  const { handleSubmit } = useFormContext<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    console.log(formValues);
  };
  return (
    <FormView onSubmit={handleSubmit(onSubmit)}>
      <InputEmail />
      <InputPassword />
      <InputPasswordConfirm />
      <Textarea />
      <FormView.Submit type="submit" value="SUBMIT" />
    </FormView>
  );
};

export default Form;
