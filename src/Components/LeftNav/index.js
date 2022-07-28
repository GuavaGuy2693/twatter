import SearchBar from "./Elements/Searchbar";
import Profile from "./Elements/Profile";
import styled from "styled-components";

const LeftNav = () => {
  return (
    <Wrapper>
      <SearchBar />
      <Profile />
    </Wrapper>
  );
};

export default LeftNav;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
