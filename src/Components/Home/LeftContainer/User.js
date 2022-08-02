import styled from "styled-components";
import { HiUserCircle } from "react-icons/hi";
import { Wrapper, Title, Secondary } from "../../../resources/styles";

const User = () => {
  return (
    <UserBox>
      <Info>
        <HiUserCircle size="60px" />
        <Text>
          <Title>Username</Title>
          <Secondary>@handle</Secondary>
        </Text>
      </Info>
    </UserBox>
  );
};

export default User;

const UserBox = styled(Wrapper)`
  border: none;
  border-radius: 0.5rem;
  background: rgba(225, 225, 225, 0.1);
`;

const Info = styled(Wrapper)`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  align-self: flex-start;
  border: none;
  padding: 0.5rem;
  gap: 0.2rem;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled(Wrapper)`
  flex-direction: column;
  border: none;
  gap: 1pt;
`;
