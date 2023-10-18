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
  text: string;
  name: Path<FormValue>;
  inputType?: string;
  register: UseFormRegisterReturn;
  errorMsg?: string;
}

const InputForm4 = (props: TypeProps) => {
  console.log(props.name);

  return (
    <>
      <InputWrapper>
        <label>{props.text}</label>
        <Input
          type={props.inputType}
          placeholder={props.text}
          {...props.register}
        />
        {props.errorMsg && (
          <span style={{ color: "red", width: "500px" }}>{props.errorMsg}</span>
        )}
      </InputWrapper>
    </>
  );
};

export default InputForm4;

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
