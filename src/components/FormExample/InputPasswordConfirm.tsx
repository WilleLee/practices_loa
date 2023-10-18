import React, { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FormValues } from ".";
import InputView from "./InputView";

const InputPasswordConfirm = () => {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { password } = watch();
  const validate = useMemo<RegisterOptions>(
    () => ({
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== password) {
          setError("passwordConfirm", {
            type: "validate",
            message: "password is not matched",
          });
          return;
        }
        clearErrors("passwordConfirm");
      },
      validate: (value) => {
        if (value !== password) {
          return "password is not matched";
        }
        return true;
      },
    }),
    [password, setError, clearErrors],
  );
  return (
    <InputView>
      <InputView.Label>password conf.</InputView.Label>
      <InputView.Input
        error={
          errors.passwordConfirm && errors.passwordConfirm.message
            ? true
            : false
        }
        type="password"
        minLength={8}
        maxLength={12}
        {...register("passwordConfirm", validate)}
      />
      {errors.passwordConfirm && errors.passwordConfirm?.message ? (
        <InputView.Error>{errors.passwordConfirm.message}</InputView.Error>
      ) : null}
    </InputView>
  );
};

export default InputPasswordConfirm;
