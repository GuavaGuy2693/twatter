import styled from "styled-components";
import "./styles.css";
import { Home, Login } from "./Components";
import { Wrapper } from "./Components/Common.style";

const renderPage = (authToken) => {
  if (authToken)
    return (
      <HomeWrapper>
        <Home />
      </HomeWrapper>
    );
  else
    return (
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    );
};

export default function App() {
  return renderPage(true);
}

const LoginWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
  height: 100vh;

  font-family: "Roboto", sans-serif;

  gap: 10px;

  position: relative;

  background: linear-gradient(116.82deg, #5967df 0.01%, #4fa494 100%);
`;
const HomeWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: center;
`;
