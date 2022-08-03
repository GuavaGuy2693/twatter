import styled from "styled-components";

import Left from "./LeftContainer";
import Middle from "./MiddleContainer";
import Right from "./RightContainer";

import { Wrapper } from "../../resources/styles";

const Home = () => {
  return (
    <Display>
      <Left />
      <Middle />
      {/* <Right /> */}
    </Display>
  );
};

export default Home;

const Display = styled(Wrapper)`
  flex-direction: row;
  justify-content: center;
`;
