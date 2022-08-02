import styled from "styled-components";
import Search from "./Search";
import User from "./User";
import { HiSearch } from "react-icons/hi";
import { Wrapper, Button } from "../../../resources/styles";

const Left = () => {
  return (
    <Content>
      <Buttons>
        <Button>
          <HiSearch size="16px" />
        </Button>
        <Button>
          <HiSearch size="16px" />
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
  @media (max-width: 990px) {
    display: flex;
  }
`;

const UI = styled(Wrapper)`
  flex-direction: column;
  gap: 0.5rem;
  border: none;

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
