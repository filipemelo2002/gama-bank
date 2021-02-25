import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
}

body {
    background: #8C52E5;
    overflow-y: hidden;
    overflow-x: hidden;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #4b12a3;
}

::-webkit-scrollbar-thumb {
  background: #5c05e3;
}

::-webkit-scrollbar-thumb:hover {
  width: 10px;
}
`;
