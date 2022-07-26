import React from "react";
import styled from "styled-components";
const Chat = () => {
  return <Chatdiv>chat</Chatdiv>;
};

export default Chat;
const Chatdiv = styled.div`
  width: 320px;
  height: 262px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
