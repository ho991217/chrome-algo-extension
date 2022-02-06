import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
/*
샘플 아이디:
  master: koosaga,
  ruby: dotorya,
  plat: whquddn55,
  dia: kimht0830,
  gold: tjdals6695,
` silver: ho991217
  bronze: dongc9173
*/

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SBAggroM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const theme = {
  bronzeBg: "linear-gradient(to top, #c79081 0%, #dfa579 100%);",
  silverBg:
    "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%); background-blend-mode: screen;",
  goldBg: "linear-gradient(to top, #e6b980 0%, #eacda3 100%);",
  goldShadow:
    "box-shadow: 0px 5px 5px -5px rgba(224,258,55,0.33), 0px 10px 20px 5px rgba(224,158,55,0.33);",
  platinumBg: "linear-gradient(to top, #4481eb 0%, #04befe 100%);",
  platinumProgress: "linear-gradient(to right, #d7d2cc 0%, #304352 100%);",
  platinumShadow:
    "box-shadow: 0px 5px 5px -5px rgba(109,223,168,0.33), 0px 10px 20px 5px rgba(109,223,168,0.33);",
  diamondBg: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);",
  diamondProgress: "linear-gradient(to right, #243949 0%, #517fa4 100%);",
  diamondShadow:
    "box-shadow: 0px 5px 5px -5px rgba(80,177,246,0.33), 0px 10px 20px 5px rgba(80,177,246,0.33);",
  rubyBg: "linear-gradient(to top, #ff0844 0%, #ffb199 100%);",
  rubyProgress: "linear-gradient(to right, #EA3364 0%, #E43223 100%);",
  rubyShadow:
    "box-shadow: 0px 5px 5px -5px rgba(234,51,100,0.33), 0px 10px 20px 5px rgba(234,51,100,0.33);",
  masterBg: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);",
  masterProgress: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%);",
  masterShadow:
    "box-shadow: 0px 5px 5px -5px rgba(109,223,168,0.33), 0px 10px 20px 5px rgba(109,223,168,0.33);",
  progressDark: "linear-gradient(to right, #434343 0%, black 100%);",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
