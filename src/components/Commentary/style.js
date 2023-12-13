import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    margin-top: 10px;

    display: flex;

    gap: 5px;
    

    > h6 {

        font-size: 24px;

    }

    >  button{

        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;

        > img {

            width: 50px;
            height: 50px;

            border-radius: 50%;

        }

    }

`;

export const Content = styled.div`

    background: rgb(120, 120, 120, 0.6);
    padding: 10px;
    border-radius: 0 10px 10px;
    margin-top: 2px;

    > p {



    }

    > div {

        display: flex;
        gap: 10px;

    > a {

        font-weight: bold;
        color: black;
        text-decoration: none;

        &:hover {

            text-decoration: underline  ;

        }

    }

    > button {

        border: none;
        background: transparent;

        color: blue;

    }

    }

`;