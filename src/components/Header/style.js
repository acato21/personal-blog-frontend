import styled from "styled-components";

export const Container = styled.header`
    top: 0;
    position: fixed;
    z-index: 333;
    
    .datalist{
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
        width: 250px;
        .listdata{
            z-index: 999;
            border-radius: 4px;
            max-height: 230px;
            overflow-y: auto;
            box-shadow: 0 1rem 2rem -1rem rgb(0,0,0,0.5);
            position: absolute;
            top: 30px;
            width: 100%;
        }
    }
        width: 100%;
    height: 56px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    padding: 0 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Perfil = styled.div`

    width: fit-content;
    color: white;
    display: flex;
    align-items: center;


    > button {

        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
       

        > img {

            width: 40px;
            height: 40px;
            border-radius: 50%;
            align-self: center;

        }

}

    > span {

        margin-left: 10px;

    }

`;

export const Input = styled.input`

    width: 250px;
    height: 25px;

    border: none;
    border-radius: 8999px;
    padding: 5px 10px;
    margin-right: 115px;
    @media(max-width: 586px){
        width: 140px;
        margin: 0;
    }
`;

export const turnOff = styled.button`

    border: none;
    background: none;

    display: flex;
    right: 0;
    justify-self: end;
`;