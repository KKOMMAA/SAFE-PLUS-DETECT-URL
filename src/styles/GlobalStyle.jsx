import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    display: flex; 
    flex-direction: column ;
    overflow-y : scroll;
    width: 100vw;
    height: 100%;
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
	box-sizing: border-box;
}

dialog {
  margin: 0 auto;
}

  #root {
    display: flex;
    flex-direction: column;
    max-width: 37.5rem;
    width: 100vw;
    min-height: 100%;
    margin: 0 auto;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
    margin : 0;
  }

  body, button, input {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
