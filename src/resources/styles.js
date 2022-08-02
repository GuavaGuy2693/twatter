import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  border: 1px solid;
  border-color: #3e3e3e;
  margin: -1px;

  transition: 0.2s;
`;

export const Button = styled.button`
  color: #e3e3e3;
  max-height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0);

  transition: 0.2s;

  :hover {
    background: rgba(225, 225, 225, 0.1);
  }
`;

export const Input = styled.input`
  /* margin: 0.1rem; */
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 12pt;
  color: #e3e3e3;
  background: rgba(225, 225, 225, 0.1);
  border: none;
  border-radius: 0.5rem;
  outline: none;
`;
