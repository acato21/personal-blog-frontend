import { Container, Content , Button, Info, Posts } from "./style";
import Perfil from '../../img/perfil.jpg'
import { PostProfile } from "../../components/Post-profile";

import { IoArrowBackSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import defaultAvatar from '../../assets/defaultavatar.png';
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../hooks/AuthContext";



export function Profile() {
    const {user} = useAuth()
    const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar
    const navigate = useNavigate();

    const [avatar, setAvatar] = useState(avatarURL)
    const [userProfileData, setUserProfileData] =useState({})

    

    useEffect(() => {
        async function fetchDataProfile(){
            const response = await api.get('/followers/list')
            console.log(response.data)
            setUserProfileData(response.data)
            
        }
        fetchDataProfile()
    }, [])//only when opens the page for the first time

    return(

        <Container>
        
            <Content>
                <div>
                    <Button> <IoArrowBackSharp color="#dfdfdf" onClick={() => navigate(-1)}  /> </Button>
                    <Button> <FaPencilAlt color="#dfdfdf" /></Button>
                </div>

                <div>
                    <img src={ avatar } alt="Foto de perfil" />
                    <h2>user.name</h2>
                    <span><i>@{user.username}</i></span>
                </div>

                <Info>

                    <div>
                        <span></span>
                        <p><i>Seguindo</i></p>
                    </div>

                    <p><i>/</i></p>

                    <div>
                        <span></span>
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