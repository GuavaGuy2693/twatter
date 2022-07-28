import React from "react";
import styled from "styled-components";
import { Input, Button } from "./Common.style";

const FormComponent = () => {
  return (
    <Form>
      <Field id="email" name="email" placeholder="email" type="email" />
      <Field
        id="password"
        name="password"
        placeholder="password"
        type="password"
      />
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

const Field = styled(Input)`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 270px;
`;

const SignUp = styled(Button)`
  color: rgba(255, 255, 255, 1);
  background-color: rgba(31, 215, 255, 0.45);

  :hover {
    background-color: rgba(31, 215, 255, 0.6);
  }

  :active {
    background-color: rgba(31, 215, 255, 0.8);
  }
`;

const LogIn = styled(Button)`
  color: rgba(255, 255, 255, 1);
  background-color: rgba(62, 239, 33, 0.45);

  :hover {
    background-color: rgba(62, 239, 33, 0.6);
  }

  :active {
    background-color: rgba(62, 239, 33, 0.8);
  }
`;
