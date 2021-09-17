import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: whitesmoke;
        font-family: monospace;
    }
`;

export default GlobalStyle;