import React, { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FormValues } from ".";
import TextareaView from "./TextareaView";

const Textarea = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormValues>();
  const validate = useMemo<RegisterOptions>(
    () => ({
      required: "text is required",
      maxLength: {
        value: 140,
        message: "text is too long",
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
          setError("text", { type: "required", message: "text is required" });
          return;
        }
        if (e.target.value.length > 140) {
          setError("text", {
            type: "maxLength",
            message: "text is too long",
          });
          return;
        }
        clearErrors("text");
      },
    }),
    [setError, clearErrors],
  );
  return (
    <TextareaView>
      <TextareaView.Textarea
        rows={5}
        maxLength={140}
        error={errors.text && errors.text.message ? true : false}
        {...register("text", validate)}
      />
      {errors.text && errors.text.message ? (
        <TextareaView.Error>{errors.text.message}</TextareaView.Error>
      ) : null}
    </TextareaView>
  );
};

export default Textarea;
