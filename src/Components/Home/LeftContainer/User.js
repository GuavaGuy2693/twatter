import styled from "styled-components";
import { HiUserCircle, HiPencil } from "react-icons/hi";
import { Wrapper, Button, Title, Secondary } from "../../../resources/styles";

const User = () => {
  return (
    <UserBox>
      <Info>
        <ImageBox>
          <HiUserCircle size="50px" />
        </ImageBox>
        <Text>
          <Title>Username</Title>
          <Secondary>@handle</Secondary>
        </Text>
      </Info>
      <Desc>User Info here</Desc>
      <Edit>
        <HiPencil size="22px" />
      </Edit>
    </UserBox>
  );
};

export default User;

const UserBox = styled(Wrapper)`
  flex-direction: column;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
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

const Text = styled(Wrapper)`
  flex-direction: column;
  border: none;
`;
const Desc = styled(Secondary)`
  flex-direction: column;
  color: #e3e3e3;
  border: none;
  padding: 0.2rem 0.4rem;
`;

const Edit = styled(Button)`
  align-self: flex-end;
`;

const ImageBox = styled(Wrapper)`
  border: none;
  align-self: flex-start;
`;
