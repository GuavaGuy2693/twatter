import styled from "styled-components";
import LeftNav from "./LeftNav";
// import {} from "./Feed";
// import {} from "./RightNav";

const Home = () => {
  return (
    <Wrapper>
      <LeftNav />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 15px;
`;