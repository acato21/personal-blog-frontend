import { Container, Content } from "./style";

export function Modal({ isOpen, children, background }) {

if(isOpen){

    return(

        <Container >
            <Content style={{background}}>
                {children}
            </Content>     
        </Container>

    );

}

return null

} 