import styled from "styled-components";
import { Path, UseFormRegisterReturn } from "react-hook-form";

interface FormValue {
  email: string;
  password: string;
  confirmPassword: string;
  text: string;
  name: string;
}

interface TypeProps {
  name: Path<FormValue>;
  inputType?: string;
  register: UseFormRegisterReturn;
  errorMsg?: string;
}

const TextareaForm4 = (props: TypeProps) => {
  console.log(props.name);
  return (
    <>
      <Textarea placeholder="What's up" rows={5} {...props.register} />
      {props.errorMsg && <span style={{ color: "red" }}>{props.errorMsg}</span>}
    </>
  );
};

export default TextareaForm4;

const Textarea = styled.textarea`
  padding: 4px 6px;
  border: 2px solid #595959;
  border-radius: 5px;
  caret-color: orange;
  &:focus {
    border-color: orange;
  }
`;
