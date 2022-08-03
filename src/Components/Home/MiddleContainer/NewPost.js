import styled from "styled-components";
import { HiUserCircle, HiChevronRight } from "react-icons/hi";
import { Wrapper, Input, Title, Button } from "../../../resources/styles";

const NewPost = () => {
  return (
    <Content>
      <Title>New Twat</Title>
      <Box>
        <ImageBox>
          <HiUserCircle size="50px" />
        </ImageBox>
        <TextBox placeholder="Speak up Twat..."></TextBox>
      </Box>
      <PostButton>
        <HiChevronRight size="22px" />
      </PostButton>
    </Content>
  );
};

export default NewPost;

const Content = styled(Wrapper)`
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
`;

const Box = styled(Wrapper)`
  flex-direction: Row;
  border: none;
`;

const ImageBox = styled(Wrapper)`
  border: none;
  align-self: flex-start;
`;

const TextBox = styled(Input)`
  flex-wrap: wrap;
  align-self: baseline;
  background: none;
`;

const PostButton = styled(Button)`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
`;
