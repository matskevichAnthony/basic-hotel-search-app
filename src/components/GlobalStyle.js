import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        body{
            background: #F5F5F5;
            font-family: 'Roboto', sans-serif;
            overflow-y: scroll;
        }
        `;


export default GlobalStyle;