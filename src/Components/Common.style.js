import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  width: 270px;

  font-size: 20px;
  line-height: normal;

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

export const Button = styled.button`
  display: flex;

  font-size: 20px;
  line-height: normal;
  text-align: center;

  border: 0;
  border-radius: 50px;
  padding: 14px 30px 13px 31px;

  transition: 0.2s;
`;
