import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-color: #3e3e3e;
  margin: -1px;

  transition: 0.2s;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e3e3e3;
  height: 2.4rem;
  width: 2.4rem;
  padding: 0.2rem;
  border: none;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0);

  transition: 0.2s;

  :hover {
    background: rgba(225, 225, 225, 0.1);
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  padding: 0.6rem;
  font-size: 12pt;
  color: #e3e3e3;
  border: none;
  border-radius: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
  outline: none;
`;

export const Title = styled.div`
  color: #e3e3e3;
  font-weight: 600;
`;

export const Secondary = styled.div`
  color: #ababab;
`;
