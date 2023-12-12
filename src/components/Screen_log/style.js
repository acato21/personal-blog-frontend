import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(350px, 90%);
    background:transparent ;
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgb(0,0,0, 0.4);
    padding: 10px 8px;

    > h1{

        font-size: 40px;
        color: black;
        align-self: left;

    }

    > button:first-child {


        align-self: left;
        
    }

`; 