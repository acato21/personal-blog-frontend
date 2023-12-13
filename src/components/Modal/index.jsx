import { Container, Content } from "./style";

export function Modal({onClick, isOpen, children, background }) {

if(isOpen){

    return(

        <Container onClick={onClick}>
            
                {children}
               
        </Container>

    );

}

return null

} 