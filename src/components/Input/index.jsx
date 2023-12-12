import { Container } from "./style";

export function Input({onChange, ...rest}) {
    return(
        <Container>
            <input 
            onChange={onChange} 
            {...rest} />

        </Container>
    );
}