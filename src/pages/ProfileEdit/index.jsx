import { Container, Content , ButtonBack, Form, Input } from "./style";
import Perfil from '../../img/perfil.jpg';

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

import { IoArrowBackSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

export function ProfileEdit() {

    const [openModal, setOpenModal] = useState(false)

    return(

        <Container>

            <Modal isOpen={openModal}> 

                <div id='modal'>
                    <p>Tem certeza que deseja excluir?</p>

                    <div>
                        <button>Sim</button>
                        <button onClick={() => setOpenModal(false)} >Não</button>
                    </div>
                </div>

            </Modal>
        
            <Content>
                <div>
                    <ButtonBack> <IoArrowBackSharp color="#dfdfdf"  /> </ButtonBack>
                    <ButtonBack onClick={() => setOpenModal(true)}><span>Excluir conta</span> </ButtonBack>
                </div>

                    <button id='profile'>
                        <img src={ Perfil } alt="Foto de perfil" />
                        <p>Editar <hr /> foto <FaPen /> </p>
                    </button>


                <Form>

                    <div>
                        <label htmlFor="user">Usuário: </label>
                        <Input id='user' type='text' placeholder='Nome de usuário' />
                    </div>

                    <div>
                        <label htmlFor="nick">Nickname: </label>
                        <Input id='nick' type='text' placeholder='Nickname' />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <Input id='email' type='email' placeholder='Email' />
                    </div>

                    <div>
                        <label htmlFor="biografia">Biografia:</label>
                        <textarea name="" id="biografia" cols="30" rows="10" placeholder="Diga um pouco sobre você"></textarea>
                    </div>


                    <Button title='Editar' />

                </Form>
            </Content>

        </Container>

    );

}