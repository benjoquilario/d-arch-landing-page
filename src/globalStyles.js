import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
 }

 html, body {
    overflow-x: hidden;
 }

 ul, ol {
   list-style: none;
 }


 a {
    text-decoration: none;
    color: inherit;
 }
`;

export default GlobalStyle;
