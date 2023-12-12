import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-size: cover;

    width: 100%;
    min-height: 100vh;

    align-items: center;
    

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 65px auto;
    
    .conteudo{
        height: 100vh;
        overflow-y: auto;
    }   

`;

export const ContainerModal = styled.div`
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
    justify-content: center;
    overflow-y: auto;
    gap: 14px;

    > img {
        object-fit: cover;
        width: 350px;
        border-radius: 8px;
        border-bottom: 1px solid gray;
        margin: auto;
    }

    > p {

        border-bottom: 1px solid gray;
        padding-bottom: 10px;
        margin-top: 3px;

        font-size: 16px;
        text-align: justify;
        

    }


`;

export const Info = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 8px;
    gap: 4px;
    > button {

        border: 1px solid ${({ theme }) => theme.COLORS.BROWN};
        background: transparent;
        display: flex ;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        > img {

            width: 40px;
            height: 40px;
            border-radius: 50%;

        }

    }

    > a {

        text-decoration: none;
        color: black;

        font-size: 16px;

        margin-left: 2px;


        &:hover{

            text-decoration: underline;

        }

    }
`;

export const Interaction = styled.div`

    width: 100%;
    margin-top: 3px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    p{
        text-align: right;
        font-size: 14px;
    }
    > div {
        display: flex;
        gap: 5px;
        svg{
            font-size: 20px;
        }

        > button {

            border: none;
            background: transparent ;

        }
    }
`;