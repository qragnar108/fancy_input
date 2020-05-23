import React from "react";
import "styled-components/macro";
import FancyInput from "./FancyInput";
import FancyInputStyled from "./FancyInputStyledComponents";

export default function App() {
  return (
    <div className="App">
      <main>
        <FancyInput />
        <FancyInputStyled />
      </main>
    </div>
  );
}
