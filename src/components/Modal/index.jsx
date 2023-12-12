import { Container, Content } from "./style";

export function Modal({ isOpen, children }) {

if(isOpen){

    return(

        <Container >
            <Content>
                {children}
            </Content>     
        </Container>

    );

}

return null

} 