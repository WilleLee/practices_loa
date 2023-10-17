import React from "react";

// styles
import styles from "./formView.module.scss";

interface Props extends React.AllHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const FormView = ({ children, ...props }: Props) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

interface SubmitProps extends React.AllHTMLAttributes<HTMLInputElement> {}

const Submit = React.memo(({ ...props }: SubmitProps) => {
  return (
    <div className={styles.submit_wrapper}>
      <input className={styles.submit} {...props} />
    </div>
  );
});

FormView.Submit = Submit;

export default FormView;
