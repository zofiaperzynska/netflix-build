import React from "react";
import { StyledApp } from "./App.styled";
import "./App.styled.ts";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  return (
    <StyledApp>
      <HomeScreen />
    </StyledApp>
  );
}

export default App;
