import styled from "styled-components";
import Search from "./Search";
import User from "./User";
import { HiSearch, HiUserCircle } from "react-icons/hi";
import { Wrapper, Button } from "../../../resources/styles";

const Left = () => {
  return (
    <Content>
      <Buttons>
        <Button>
          <HiSearch size="22px" />
        </Button>
        <Button>
          <HiUserCircle size="22px" />
        </Button>
      </Buttons>
      <UI>
        <Search />
        <User />
      </UI>
    </Content>
  );
};

export default Left;

const Buttons = styled(Wrapper)`
  border: none;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  @media (max-width: 990px) {
    display: flex;
  }
`;

const UI = styled(Wrapper)`
  flex-direction: column;
  gap: 0.5rem;
  border: none;
  padding: 0.5rem;
  gap: 1rem;
  @media (max-width: 990px) {
    display: none;
  }
`;

const Content = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  width: 16rem;
  padding: 0.5rem;
  gap: 0.5rem;
  @media (max-width: 990px) {
    width: 5rem;
  }
`;
