import styled from 'styled-components'

export const ContainerModal = styled.div`

    position: relative;

    @media(max-width: 450px){
        width: 360px;
    }
    width: 440px;
    height: 650px;
    
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 1px 2px -1px rgb(0,0,0, 0.3);
    padding: 20px 20px 20px;
    background: #dfdfdf;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    gap: 14px;

    > img {
        object-fit: cover;
        width: 380px;
        border-radius: 8px;
        border-bottom: 1px solid gray;
        margin: auto;

    }
    @media(max-width:430px){
        >img{
            width: 320px;
        }
    } 
    > p {

        border-bottom: 1px solid gray;
        padding-bottom: 10px;
        margin-top: 3px;

        font-size: 16px;
        text-align: justify;
        
    }
    
    #division {

        display: flex;
        align-items: center;
        
        > h6 {
            
            font-size: 26px;

        }

        > svg {

            font-size: 20px;
            margin-top: 5px;

        }

        > span {

            font-size: 24px;
            font-weight: bold;

        }

    }

    #exit {

        position: absolute;
        width: fit-content;
        height: fit-content;

        background: transparent;
        border: none;

        right: 20px;
        top: 24px;

        font-size: 20px;
        color: gray;

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

        text-align: justify;
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

export const AddComment = styled.div`

    display: flex;
    width: 400px;
    margin: auto;

    position: absolute;
    bottom: 10px;

    @media(max-width: 450px){
        width: 330px;
    }

    > input {

        width: 100%;
        height: 50px;

        padding: 3px 10px;
        border-radius: 8px 0 0 8px;
        border: none;

    }

    > button {

        width: 50px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
        border-radius: 0 8px 8px 0;
        border: none;

        background: #1E90FF;    

    }

`;