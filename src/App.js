import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CallInfo } from "./functions/callInfo";

const theme = {
  bronzeBg: "linear-gradient(to top, #c79081 0%, #dfa579 100%);",
  silverBg:
    "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%); background-blend-mode: screen;",
  goldBg: "linear-gradient(to top, #e6b980 0%, #eacda3 100%);",
  platinumBg: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);",
  diamondBg: "linear-gradient(to top, #4481eb 0%, #04befe 100%);",
  rubyBg: "linear-gradient(to top, #ff0844 0%, #ffb199 100%);",
  masterBg: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);",
};

const tierInfo = [
  "Unranked",
  "Bronze V",
  "Bronze IV",
  "Bronze III",
  "Bronze II",
  "Bronze I",
  "Silver V",
  "Silver IV",
  "Silver III",
  "Silver II",
  "Silver I",
  "Gold V",
  "Gold IV",
  "Gold III",
  "Gold II",
  "Gold I",
  "Diamond V",
  "Diamond IV",
  "Diamond III",
  "Diamond II",
  "Diamond I",
  "Platinum V",
  "Platinum IV",
  "Platinum III",
  "Platinum II",
  "Platinum I",
  "Ruby V",
  "Ruby IV",
  "Ruby III",
  "Ruby II",
  "Ruby I",
  "Master",
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.tier < 6
      ? `${props.theme.bronzeBg}`
      : props.tier < 11
      ? `${props.theme.silverBg}`
      : props.tier < 16
      ? `${props.theme.goldBg}`
      : props.tier < 21
      ? `${props.theme.platinumBg}`
      : props.tier < 26
      ? `${props.theme.diamondBg}`
      : props.tier < 31
      ? `${props.theme.rubyBg}`
      : `${props.theme.masterBg}`};
`;

function App() {
  const [userId, setUserId] = useState("ho991217");
  const [userInfo, setUserInfo] = useState(null);

  const retreiveUserData = async () => {
    if (userId) {
      const response = await CallInfo(userId);
      setUserInfo(response.data);
    }
  };

  useEffect(() => {
    retreiveUserData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container tier={userInfo?.tier}>{tierInfo[userInfo?.tier]}</Container>
    </ThemeProvider>
  );
}

export default App;
