import styled from "styled-components";
import { Path, UseFormRegister } from "react-hook-form";

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
  register: UseFormRegister<any>;
  errorMsg?: string;
}

const TextareaForm4 = ({ name, register, errorMsg }: TypeProps) => {
  return (
    <>
      <Textarea placeholder="What's up" rows={5} {...register(name)} />
      {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
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
