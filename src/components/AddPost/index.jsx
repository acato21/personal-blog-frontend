import { Container } from "./style";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import perfil from '../../img/perfil.jpg'

export function AddPost() {


    return(

        <Container>

            <h6>Criar publicação</h6>

            <img src={perfil} alt="" />

            <textarea cols="30" rows="10" maxLength='5000' placeholder="No que você está pensando, Igor?" ></textarea>

        <div>
            <div>
                <FaImage />
                <p>Imagem</p>
            </div>
            
            <div>
                <FaPaperPlane />
                <p>Enviar</p>
            </div>
        </div>

        </Container>

    );

}