import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (!name) return;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "text":
        setText(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`email : ${email}\npassword : ${password}\ntext : ${text}`);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <label>email</label>
        <Input
          name="email"
          type="email"
          placeholder="email"
          minLength={4}
          required
          value={email}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <label>password</label>
        <Input
          name="password"
          type="password"
          placeholder="password"
          minLength={8}
          maxLength={16}
          required
          value={password}
          onChange={handleChange}
        />
      </InputWrapper>
      <Textarea
        name="text"
        rows={5}
        maxLength={180}
        placeholder="What's up?"
        required
        value={text}
        onChange={handleChange}
      />
      <SubmitWrapper>
        <Submit type="submit" value={"SUBMIT"} />
      </SubmitWrapper>
    </Wrapper>
  );
};

export default Form;

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
