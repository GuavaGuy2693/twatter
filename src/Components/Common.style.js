import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  font-family: "Roboto", sans-serif;

  gap: 10px;

  position: relative;

  background: linear-gradient(116.82deg, #5967df 0.01%, #4fa494 100%);
`;

export const Input = styled.input`
  display: flex;
  width: 320px;

  font-size: 20px;
  line-height: normal;

  border: 0;
  margin-bottom: 20px;
  border-radius: 50px;
  padding: 13px 0px 14px 0px;

  color: rgba(255, 255, 255, 1);
  background: transparent;
  background-color: rgba(43, 43, 43, 0.45);

  transition: 0.2s;

  :invalid {
    box-shadow: 0 0 3px rgba(255, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  display: flex;

  font-size: 20px;
  line-height: normal;
  text-align: center;

  border: 0;
  border-radius: 50px;
  padding: 13px 0px 14px 0px;

  transition: 0.2s;
`;
