import React, { FunctionComponent } from "react";
import Main from "../../views/main";
import { GlobalStyle } from "./styles";
import Timeline from "../../views/timeline";
import ProjectList from "../../views/project";

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Main />
      <ProjectList />
      <Timeline />
    </>
  );
};

export default App;
