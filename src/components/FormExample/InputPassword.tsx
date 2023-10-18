import React, { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FormValues } from ".";
import InputView from "./InputView";

const InputPassword = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormValues>();
  const validate = useMemo<RegisterOptions>(
    () => ({
      required: "password is required",
      minLength: {
        value: 8,
        message: "password is too short",
      },
      maxLength: {
        value: 12,
        message: "password is too long",
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
          setError("password", {
            type: "required",
            message: "password is required",
          });
          return;
        }
        if (e.target.value.length < 8) {
          setError("password", {
            type: "minLength",
            message: "password is too short",
          });
          return;
        }
        if (e.target.value.length > 12) {
          setError("password", {
            type: "maxLength",
            message: "password is too long",
          });
          return;
        }
        clearErrors("password");
      },
    }),
    [setError, clearErrors],
  );
  return (
    <InputView>
      <InputView.Label>password</InputView.Label>
      <InputView.Input
        error={errors.password && errors.password.message ? true : false}
        type="password"
        minLength={8}
        maxLength={12}
        {...register("password", validate)}
      />
      {errors.password && errors.password?.message ? (
        <InputView.Error>{errors.password.message}</InputView.Error>
      ) : null}
    </InputView>
  );
};

export default InputPassword;
