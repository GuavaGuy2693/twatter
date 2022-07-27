import styled from "styled-components";
import "./styles.css";
import Login from "./Components/Login";

export default function App() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;

  padding: 392px 560px;
  gap: 10px;

  position: relative;

  background: linear-gradient(116.82deg, #5967df 0.01%, #4fa494 100%);
`;
