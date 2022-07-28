import React from "react";
import styled from "styled-components";

const FormComponent = () => {
  return (
    <Form>
      <Input name="email" placeholder="email" type="email" />
      <Input name="password" placeholder="password" type="password" />
      <Buttons>
        <SignUp>Sign Up</SignUp>
        <LogIn>Log In</LogIn>
      </Buttons>
    </Form>
  );
};

export default FormComponent;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  padding: 20px 25px;

  background-color: rgba(43, 43, 43, 0.45);
`;

const Input = styled.input`
  display: flex;
  width: 270px;

  font-size: 20px;
  line-height: normal;
  text-align: center;

  border: 0;
  margin-bottom: 20px;
  border-radius: 50px;
  padding: 13px 0px 14px 0px;

  color: rgba(151, 151, 151, 1);
  background: transparent;
  background-color: rgba(43, 43, 43, 0.45);

  transition: 0.2s;

  :invalid {
    box-shadow: 0 0 3px rgba(255, 0, 0, 0.3);
  }

  :focus {
    color: rgba(255, 255, 255, 1);
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 270px;
`;

const SignUp = styled.button`
  display: flex;

  font-size: 20px;
  line-height: normal;
  text-align: center;

  border: 0;
  border-radius: 50px;
  padding: 14px 30px 13px 31px;

  color: rgba(255, 255, 255, 1);
  background-color: rgba(31, 215, 255, 0.45);

  transition: 0.2s;

  :hover {
    background-color: rgba(31, 215, 255, 0.6);
  }

  :active {
    background-color: rgba(31, 215, 255, 0.8);
  }
`;

const LogIn = styled.button`
  display: flex;

  font-size: 20px;
  line-height: normal;
  text-align: center;

  border: 0;
  border-radius: 50px;
  padding: 14px 30px 13px 31px;

  color: rgba(255, 255, 255, 1);
  background-color: rgba(62, 239, 33, 0.45);

  transition: 0.2s;

  :hover {
    background-color: rgba(62, 239, 33, 0.6);
  }

  :active {
    background-color: rgba(62, 239, 33, 0.8);
  }
`;
