import { Container, Content , Button, Info, Posts } from "./style";
import Perfil from '../../img/perfil.jpg'
import { PostProfile } from "../../components/Post-profile";

import { IoArrowBackSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

export function Profile() {

    return(

        <Container>
        
            <Content>
                <div>
                    <Button> <IoArrowBackSharp color="#dfdfdf"  /> </Button>
                    <Button> <FaPencilAlt color="#dfdfdf" /></Button>
                </div>

                <div>
                    <img src={ Perfil } alt="Foto de perfil" />
                    <h2>Lucas Cid</h2>
                    <span><i>@lucas</i></span>
                </div>

                <Info>

                    <div>
                        <span>600</span>
                        <p><i>Seguindo</i></p>
                    </div>

                    <p><i>/</i></p>

                    <div>
                        <span>2400</span>
                        <p><i>Seguidores</i></p>
                    </div>

                    <p><i>/</i></p>

                    <div>
                        <span>24</span>
                        <p><i>Posts</i></p>
                    </div>

                </Info>


                <Posts>
                    <h6>Posts</h6>

                    <div>

                        <PostProfile src={Perfil} />

                    </div>
                </Posts>
                

            </Content>

        </Container>

    );

}