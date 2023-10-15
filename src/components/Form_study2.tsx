import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

interface FormValue {
  email: string;
  password: string;
  text: string;
}

const Testform2 = () => {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
    alert(
      `email : ${data.email} \npassword : ${data.password} \ntext : ${data.text}`,
    );
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWrapper>
          <label>email</label>
          <Input
            type="email"
            placeholder="email"
            required
            minLength={4}
            {...register("email")}
          />
        </InputWrapper>

        <InputWrapper>
          <label>password</label>
          <Input
            type="password"
            placeholder="password"
            required
            minLength={8}
            maxLength={16}
            {...register("password")}
          />
        </InputWrapper>

        <Textarea
          placeholder="What's up?"
          rows={5}
          required
          maxLength={180}
          {...register("text")}
        />
        <SubmitWrapper>
          <Submit type="submit" value={"SUBMIT"} />
        </SubmitWrapper>
      </Wrapper>
    </>
  );
};
export default Testform2;

const Wrapper = styled.form`
  margin: 20px auto;
  padding: 20px 16px;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
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
const Textarea = styled.textarea`
  padding: 4px 6px;
  border: 2px solid #595959;
  border-radius: 5px;
  caret-color: orange;
  &:focus {
    border-color: orange;
  }
`;
const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Submit = styled.input`
  padding: 4px 0;
  width: 80px;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  opacity: 0.7;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.5;
  }
`;
