/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Button_text({title, ...rest}) {


    return(

        <Container type="button" {...rest}>
            {title}
        </Container>


    );

}