import { Container, Content , ButtonBack, Form, Input } from "./style";
import Perfil from '../../img/perfil.jpg';
import {useNavigate} from 'react-router-dom'
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

import { IoArrowBackSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import {api} from '../../service/api'
import defaultAvatar from '../../assets/defaultavatar.png'
export function ProfileEdit() {
    const {user} = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const [newEmail, setEmail] = useState('')
    const [newUsername, setUsername] = useState('')
    const [newName, setName] = useState('')
    const [biography, setBiography] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    const [avatar, setAvatar] = useState()
    const [avatarFile, setAvatarFile] = useState(null)

    function handleChangeAvatar(event){
        const file = event.target.files[0]

    }

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
                    <ButtonBack> <IoArrowBackSharp color="#dfdfdf" onClick={() => navigate('/profile')}  /> </ButtonBack>
                    <ButtonBack onClick={() => setOpenModal(true)}><span>Excluir conta</span> </ButtonBack>
                </div>

                    <label id="profile" htmlFor="avatar">

                         <img src={ Perfil } alt="Foto de perfil" />
                        <input 
                        id="avatar"
                        onChange={handleChangeAvatar}
                        type="file" />
                        <p>Editar <hr /> foto <FaPen />
                         </p>
                    </label>
                       
                    


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
                        <label htmlFor="oldpassword">Senha atual: </label>
                        <Input id='oldpassword' type='password' placeholder='Senha antiga' />
                    </div>
                    <div>
                        <label htmlFor="newPassword">Nova senha: </label>
                        <Input id='newPassword' type='password' placeholder='Nova senha para atualizar' />
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