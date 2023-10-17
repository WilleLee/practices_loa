import React, { ForwardedRef, forwardRef } from "react";

// styles
import styles from "./TextareaView.module.scss";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TextareaView = ({ children, ...props }: Props) => {
  return (
    <div className={styles.wrapper} {...props}>
      {children}
    </div>
  );
};

interface TextareaProps extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  error: boolean;
}

const Textarea = forwardRef(
  (
    { error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={`${styles.textarea} ${error ? styles.error : ""}`}
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
    <p className={styles.error} {...props}>
      {children}
    </p>
  );
});

TextareaView.Textarea = React.memo(Textarea);
TextareaView.Error = Error;

export default TextareaView;
