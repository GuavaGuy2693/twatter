import React from "react";
import styled from "styled-components";
import User from "./User";
import Feed from "./Feed";
import Rightnav from "./Rightnav";
const MainArea = () => {
  return (
    <Wrapper>
      <User />
      <Feed />
      <Rightnav />
    </Wrapper>
  );
};

export default MainArea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  padding: 20px 0px;
  gap: 15px;
`;
