import { Component } from "react";
import "./styles.css";
import styled from "styled-components";
import { MainArea } from "./Components";
const App = () => {
  return (
    <div className="App">
      <MainArea />
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 15px;

  position: absolute;
  width: 1270px;
  height: 715px;
  left: 85px;
  top: 0px;
`;
