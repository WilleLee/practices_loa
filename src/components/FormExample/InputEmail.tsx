import React, { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FormValues } from ".";
import InputView from "./InputView";
import { EMAIL_REG_EXP } from "../../constants/patterns";

const InputEmail = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormValues>();
  const validate = useMemo<RegisterOptions>(
    () => ({
      required: "email is required",
      minLength: {
        value: 4,
        message: "email is too short",
      },
      maxLength: {
        value: 30,
        message: "email is too long",
      },
      pattern: {
        value: EMAIL_REG_EXP,
        message: "email is invalid",
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
          setError("email", { type: "required", message: "email is required" });
          return;
        }
        if (e.target.value.length < 4) {
          setError("email", {
            type: "minLength",
            message: "email is too short",
          });
          return;
        }
        if (e.target.value.length > 30) {
          setError("email", {
            type: "maxLength",
            message: "email is too long",
          });
          return;
        }
        if (!EMAIL_REG_EXP.test(e.target.value)) {
          setError("email", { type: "pattern", message: "email is invalid" });
          return;
        }
        clearErrors("email");
      },
    }),
    [setError, clearErrors],
  );
  return (
    <InputView>
      <InputView.Label>email</InputView.Label>
      <InputView.Input
        error={errors.email && errors.email?.message ? true : false}
        type="email"
        minLength={4}
        maxLength={30}
        {...register("email", validate)}
      />
      {errors.email && errors.email?.message ? (
        <InputView.Error>{errors.email.message}</InputView.Error>
      ) : null}
    </InputView>
  );
};

export default InputEmail;
