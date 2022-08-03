import styled from "styled-components";
import { Input } from "../../../resources/styles";

const Search = () => {
  return <SearchInput placeholder="Search" />;
};

export default Search;

const SearchInput = styled(Input)`
  text-align: right;
`;
