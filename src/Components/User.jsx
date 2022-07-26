import React from "react";
import styled from "styled-components";
import Profile from "./User/Profile";
import Searchbar from "./User/Searchbar";
const User = () => {
  return (
    <UserDiv>
      <Profile />
      <Searchbar />
    </UserDiv>
  );
};

export default User;
const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 15px;

  width: 320px;
  height: 406px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
