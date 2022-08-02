import styled from "styled-components";
import Trending from "./Trending";
import { Wrapper } from "../../../resources/styles";

const Right = () => {
  return <Content>Right</Content>;
};

export default Right;

const Content = styled(Wrapper)`
  width: 16rem;
  justify-content: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
