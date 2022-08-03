import styled from "styled-components";
import { Wrapper } from "../../../resources/styles";

const NewPost = () => {
  return <Box>New</Box>;
};

export default NewPost;

const Box = styled(Wrapper)`
  flex-direction: column;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
`;
