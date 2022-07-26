import React from "react";
import styled from "styled-components";
import Newpost from "./Feed/Newpost";
import Post from "./Feed/Post";
const feed = () => {
  return (
    <Feeddiv>
      <Newpost />
      <Post />
    </Feeddiv>
  );
};

export default feed;
const Feeddiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 600px;
  height: 675px;
`;
