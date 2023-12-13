    import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800} fixed;

    overflow-y: auto;

`;


export const Content = styled.div`

background: rgba(120, 120, 120, 0.5);
padding: 10px;
border-radius: 8px;
margin: 90px auto;
width: min(1200px , 90%) ;
> div:first-child {

    display: flex;
        justify-content: space-between;
        
    }
    
    > div:nth-child(2) {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        
        margin-bottom: 50px;
        
        
        > img {
            
            height: 150px;
            width: 150px;
            border-radius: 50%;
            
            display: flex;
            margin: 40px auto 30px;
            
        }

        > h2 {
            
            font-size: 25px;
            
        }
        
        > span {
            
            opacity: 0.6;
            
        }

    }
    
`;

export const Button = styled.button`

    width: fit-content;
    height: 15px;
    font-size: 30px;

    border: none;

    background: transparent;

`;

export const Info = styled.div`

display: flex;

justify-content: center;
align-items: center;
gap: 3px;

    > p {

        font-size: 80px;
        color: white;
        font-family: 'Courier New', Courier, monospace;

    }

    > div {

        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        > span {

            font-size: 25px;
            opacity: 0.8;

        }

        > p {

            font-size: 20px;

        }

    }



`; 

export const Posts = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 20px;

    > h6 {

        color: white;
        font-size: 25px;
        font-weight: 400;
        text-align: center;
        width: 100%;

        margin: 30px 0;
        border-bottom: 1px solid #dfdfdf;

        padding-bottom: 10px;

    }

    > div {

        width: 100%;

    } 
`;
