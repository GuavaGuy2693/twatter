import React from "react";
import styled from "styled-components";
const Post = () => {
  return <PostDiv>Post</PostDiv>;
};

export default Post;
const PostDiv = styled.div`
  width: 600px;
  height: 482px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
