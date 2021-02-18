import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background: #8C52E5;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

`