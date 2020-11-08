import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background-color:#1C8E77;
        color: white;
        line-height:1;
        overflow-x: hidden;
    }
    *,*::after,*::before{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        
    }
`;
