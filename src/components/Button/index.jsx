/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Button({onClick, title, ...rest }) {

    return(

        <Container 
        onClick={onClick}
        {...rest}>

           { title }     
    
        </Container>

    );

}