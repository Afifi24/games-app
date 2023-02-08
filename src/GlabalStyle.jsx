import {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    --container-width-lg:80%;
    --container-width-lg:90%;
    --transition:500ms;
    --primary-color:#ff2625;
    --light-color:#ebeaea
}

body{
    background-color: var(--light-color);
    font-family: 'Kulim Park', sans-serif;
    width: var(--container-width-lg);
    margin: auto;
    /* media queries */
    @media screen and (max-width:600px){
        width:var(--container-width-md);
        margin: auto;
         
    } 
}

`
export default Globalstyle;