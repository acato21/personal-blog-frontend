import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    padding: 20px 64px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800} fixed;

    overflow-y: auto;

    #modal {

        display: flex;
        flex-direction: column;


        gap: 200px;

        padding: 20px;

        > p {

            font-weight: bold;
            font-size: 20px;

        }
        
        > div {

            display: flex;
            justify-content: space-between;

            > button {

                padding: 10px 20px;
                border: none;
                border-radius: 8px;

                font-size: 20px;

            }

            > button:first-child {

                background: green;

            }

            > button:last-child {

                background: red;

            }

        }

    }
`;


export const Content = styled.div`

background: rgba(120, 120, 120, 0.5);
padding: 20px;
border-radius: 8px;

> #profile {

        height: fit-content;
        width: fit-content;

        border: none;
        border-radius: 50%;

        display: flex;
        margin: 40px auto 30px;

        position: relative;

> img {
        
        height: 150px;
        width: 150px;
        border-radius: 50%;
        filter: brightness(0.5);
        
    }

> p {

        color: #f8f8ff;
        position: absolute;

        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        align-items: center;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

}

}

> div:first-child {

        display: flex;
        justify-content: space-between;

        > button {

                color: ${({ theme }) => theme.COLORS.SALMON };

                text-decoration: none;

                &:hover{

                        text-decoration: underline;

                }

                > span {

                    font-size: 20px;

                }
        }
        
    }
    
`;

export const ButtonBack = styled.button`

    width: fit-content;
    height: 15px;
    font-size: 30px;

    border: none;

    background: transparent;

`;

export const Form = styled.form`

    padding: 0 200px;

    display: flex;
    flex-direction: column;

    > button {

        background: ${({theme}) => theme.COLORS.SALMON};
        margin-top: 0;

    }

    > div {

        margin-top: 10px;

        display: flex;
        flex-direction: column;

        > label {

                color: #dfdfdf;
                margin-bottom: 8px;
        }

        > textarea {

                resize: none;
                padding: 10px;
                border-radius: 10px;

        }

    }

    > button {

        margin-top: 20px;

    }

`;

export const Input = styled.input`

        background: #dfdfdf;

        width: 100%;
        height: 24px;

        border-left: 2px solid black;
        border-top: none;
        border-radius: 10px;
        border-bottom: none;
        border-right: none;
        padding: 20px 14px;
        box-shadow: 0 0 3px 1px rgb(0,0,0, 0.3);

`;