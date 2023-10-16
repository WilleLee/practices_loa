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
  text: string;
  name: Path<FormValue>;
  inputType?: string;
  register: UseFormRegister<FormValue>;
  errorMsg?: string;
}

const InputForm = ({
  text,
  name,
  register,
  errorMsg,
  inputType,
}: TypeProps) => {
  return (
    <>
      <InputWrapper>
        <label>{text}</label>
        <Input type={inputType} placeholder={text} {...register(name)} />
        {errorMsg && (
          <span style={{ color: "red", width: "500px" }}>{errorMsg}</span>
        )}
      </InputWrapper>
    </>
  );
};

export default InputForm;

const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;
const Input = styled.input`
  padding: 4px 6px;
  border: 2px solid #595959;
  border-radius: 5px;
  caret-color: orange;
  &:focus {
    border-color: orange;
  }
`;
