import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-size: cover;

    width: 100%;
    min-height: 100vh;

    align-items: center;
    
    #modal{
        position: absolute;
        z-index: 1111;
    }
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