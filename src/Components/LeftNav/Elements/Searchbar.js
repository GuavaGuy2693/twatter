import React from "react";
import styled from "styled-components";
import { Input } from "../../Common.style";

const SearchBar = () => {
  return <Search id="search" name="search" placeholder="Search" type="text" />;
};

export default SearchBar;

const Search = styled(Input)`
  text-align: right;
  padding-right: 20px;
`;
