import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = () => {
  return (
    <Searchbardiv>
      <form>
        <input placeholder="Search" type="text" />
      </form>
    </Searchbardiv>
  );
};

export default Searchbar;
const Searchbardiv = styled.div`
  width: 320px;
  height: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
