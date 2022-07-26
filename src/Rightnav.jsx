import React from "react";
import styled from "styled-components";
import Chat from "./Rightnav/Chat";
import Trending from "./Rightnav/Trending";
const Rightnav = () => {
  return (
    <div>
      <Chat />
      <Trending />
    </div>
  );
};

export default Rightnav;
const Rightnavdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 320px;
  height: 541px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
