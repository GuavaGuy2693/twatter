import styled from "styled-components";
import {
  HiUserCircle,
  HiHeart,
  HiRefresh,
  HiExternalLink
} from "react-icons/hi";
import { Wrapper, Title, Secondary, Button } from "../../../resources/styles";

const Post = () => {
  const postBox = () => {
    return (
      <Content>
        <Info>
          <ImageBox>
            <HiUserCircle size="50px" />
          </ImageBox>
          <Text>
            <Title>Username</Title>
            <Secondary>@handle</Secondary>
            <Data>Post Text goes here</Data>
          </Text>
        </Info>
        <Buttons>
          <Group>
            <Button>
              <HiHeart size="22px" />
            </Button>
            <Secondary>num</Secondary>
          </Group>
          <Group>
            <Button>
              <HiRefresh size="22px" />
            </Button>
            <Secondary>num</Secondary>
          </Group>
          <Button>
            <HiExternalLink size="22px" />
          </Button>
        </Buttons>
      </Content>
    );
  };

  return postBox();
};

export default Post;

const Content = styled(Wrapper)`
  flex-direction: column;
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
`;

const Buttons = styled(Wrapper)`
  border: none;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  @media (max-width: 990px) {
    display: flex;
  }
`;

const Group = styled(Wrapper)`
  border: none;
  align-items: center;
  gap: 0.2rem;
`;

const Info = styled(Wrapper)`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  align-self: flex-start;
  border: none;

  gap: 0.2rem;
  justify-content: flex-start;
  align-items: center;
`;

const Data = styled(Secondary)`
  border: none;
  padding-top: 1rem;
`;

const Text = styled(Wrapper)`
  flex-direction: column;
  border: none;
`;

const ImageBox = styled(Wrapper)`
  border: none;
  align-self: flex-start;
`;
