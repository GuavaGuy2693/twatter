import React from "react";
import styled from "styled-components";
const Newpost = () => {
  return <NewPostDiv>Newpost</NewPostDiv>;
};

export default Newpost;
const NewPostDiv = styled.div`
  width: 600px;
  height: 178px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
