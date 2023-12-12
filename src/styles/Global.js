import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{

        -webkit-font-smoothing: antialiased;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    }

    body, input, button, textarea {

        font-family: 'Roboto Slab', serif;

    } 

    button{

        cursor: pointer;

    }

`;