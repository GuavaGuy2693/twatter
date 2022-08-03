import styled from "styled-components";
import NewPost from "./NewPost";
import Post from "./Post";
import { Wrapper } from "../../../resources/styles";

const Middle = () => {
  return (
    <Content>
      <NewPost />
    </Content>
  );
};

export default Middle;

const Content = styled(Wrapper)`
  justify-content: center;
  width: 30rem;
  padding: 0.5rem;
`;
