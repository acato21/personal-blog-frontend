import styled from "styled-components";

export const Container = styled.button`

    width: 100%;

    background: none;
    border: 1px solid black;
    padding: 8px 8px;

    
    border-radius: 4px;

    margin-top: 10px;

    color: black;

    cursor: pointer;
    transition: background 0.3s;
    &:hover{
        color: white;
        background: black;
    }
`;