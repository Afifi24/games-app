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
    
}

`
export default Globalstyle;