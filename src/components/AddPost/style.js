import styled from "styled-components";

export const Container = styled.div`

    @media(max-width: 450px){
        width: 360px;
    }
    width: 450px;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 1px 2px -1px rgb(0,0,0, 0.3);
    padding: 10px 20px 20px;
    background: #dfdfdf;

    display: flex;
    flex-direction: column;

    align-items: center;

    > h6 {

        width: 100%;

        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid;
        padding-bottom: 10px;
        margin: 10px 0 20px;

        text-align: center;

    }

    > textarea {

        width: 100%;
        height: 200px;
        padding: 8px;

        border-radius: 8px 8px 0 0;

        resize: none;

    }

    > img {
        object-fit: cover;
        width: 350px;
        border-radius: 8px;
        border-bottom: 1px solid gray;
        margin: auto;
        margin-bottom: 10px;
    }

    > div {

        width: 100%;
        display: flex;

        > div:first-child {

            background: green;
            width: 50%;
            height: 50px;
            border-radius: 0 0 0 10px;

            display: flex;
            align-items: center;
            justify-content: center;

        }

        > div:last-child {

            background: #1E90FF;
            width: 50%;
            height: 50px;
            border-radius: 0 0 10px 0;

            display: flex;
            align-items: center;
            justify-content: center;

        }
    }

`;