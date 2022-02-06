import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import CallInfo from "./functions/callInfo";

const theme = {
  bronzeBg: "linear-gradient(to top, #c79081 0%, #dfa579 100%);",
  silverBg:
    "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%); background-blend-mode: screen;",
  goldBg: "linear-gradient(to top, #e6b980 0%, #eacda3 100%);",
  platinumBg: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);",
  diamodBg: "linear-gradient(to top, #4481eb 0%, #04befe 100%);",
  rubyBg: "linear-gradient(to top, #ff0844 0%, #ffb199 100%);",
  masterBg: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);",
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.platinumBg};
`;

function App() {
  const userData = CallInfo("ho991217");

  return (
    <ThemeProvider theme={theme}>
      <Container>안녕하시렵니까요</Container>
    </ThemeProvider>
  );
}

export default App;
