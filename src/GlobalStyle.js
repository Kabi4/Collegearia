import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background-color: whitesmoke;
        color: white;
        line-height:1;
        overflow-x: hidden;
    }
    *,*::after,*::before{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        
    }
body{
    width:100vw;
    height:100vh;
}
body::-webkit-scrollbar{
  width: 8px;
}

body::-webkit-scrollbar-track{
  background-color: #eee;
}

body::-webkit-scrollbar-thumb {
  background: #ccc;
}

body::-webkit-scrollbar-thumb:hover {
  background: darkgray;
}

.userSelect{
  user-select:none;
}

a{
  text-decoration:none;
  color: black;
}

`;
