import React, { ForwardedRef, forwardRef } from "react";

// styles
import styles from "./inputView.module.scss";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const InputView = ({ children, ...props }: Props) => {
  return (
    <div className={styles.wrapper} {...props}>
      {children}
    </div>
  );
};

interface LabelProps extends React.AllHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = React.memo(({ children, ...props }: LabelProps) => {
  console.log("label rendered");
  return <label {...props}>{children}</label>;
});

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

const Input = forwardRef(
  ({ error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.error : ""}`}
        {...props}
      />
    );
  },
);

interface ErrorProps extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Error = React.memo(({ children, ...props }: ErrorProps) => {
  console.log("error rendered");
  return (
    <p className={styles.error_message} {...props}>
      {children}
    </p>
  );
});

InputView.Label = Label;
InputView.Input = React.memo(Input);
InputView.Error = Error;

export default InputView;
