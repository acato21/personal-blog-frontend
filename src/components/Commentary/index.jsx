import { Container, Content } from "./style";

import perfil from '../../img/perfil.jpg'

export function Commentary() {

    return(

        <Container>
            <button>
                <img src={perfil} alt="fot de perfil" />
            </button>

            <Content>
                <div>
                    <a href="#">lucas1</a>

                    <button>+seguir</button>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro eligendi explicabo repudiandae dolorem voluptas vero commodi, impedit quidem praesentium laborum, modi consequatur repellat culpa. Vero illo iste maxime voluptatibus.</p>
            </Content>
        </Container>

    );

}