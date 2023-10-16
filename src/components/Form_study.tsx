import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "./Form_Input";
import TextareaForm from "./Form_textarea";

interface FormValue {
  email: string;
  password: string;
  confirmPassword: string;
  text: string;
  name?: string;
}

// 유효성 검사를 위해 yup 사용
const Testform = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("email을 입력하세요.")
      .email("email의 형식이 맞지 않습니다."),
    password: yup
      .string()
      .required("password를 입력하세요.")
      .min(8, "8글자 이상의 password를 입력하세요.")
      .max(16, "16글자 이하의 password를 입력하세요."),
    confirmPassword: yup
      .string()
      .required("password를 동일하게 입력하세요")
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    text: yup.string().required().max(180, "글자가 180자를 초과하였습니다."),
    name: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
    alert(
      `email : ${data.email} \npassword : ${data.password} \ntext : ${data.text}`,
    );
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit(onSubmitHandler)}>
        <InputForm
          text={"email"}
          name={"email"}
          inputType={"email"}
          errorMsg={errors.email?.message}
          register={register}
        />

        <InputForm
          text={"password"}
          name={"password"}
          inputType={"password"}
          errorMsg={errors.password?.message}
          register={register}
        />
        <InputForm
          text={"confirm password"}
          name={"confirmPassword"}
          inputType={"password"}
          errorMsg={errors.confirmPassword?.message}
          register={register}
        />

        <TextareaForm
          name={"text"}
          errorMsg={errors.text?.message}
          register={register}
        />

        <SubmitWrapper>
          <Submit type="submit" value={"SUBMIT"} />
        </SubmitWrapper>
      </Wrapper>
    </>
  );
};
export default Testform;

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
