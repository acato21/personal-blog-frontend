import { Container, Content , Button, Info, Posts } from "./style";
import Perfil from '../../img/perfil.jpg'
import { PostProfile } from "../../components/Post-profile";
import { Post } from "../../components/Post";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import defaultAvatar from '../../assets/defaultavatar.png';
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../hooks/AuthContext";



export function Profile() {
    const {user} = useAuth()
    console.log(user)
    const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar
    const navigate = useNavigate();

    const [avatar, setAvatar] = useState(avatarURL)
    const [userProfileData, setUserProfileData] =useState({})
    const [seguidores , setSeguidores] = useState(0)
    const [seguindo , setSeguindo] = useState(0)
    const [posts , setPosts] = useState(0)
    const [UserPosts, setUserPosts] = useState([])
    

    useEffect(() => {
        async function fetchDataProfile(){
            const response = await api.get('/followers/list')
            console.log(response.data.followers)
            setSeguidores(response.data.followers.length)
            setSeguindo(response.data.following.length)
            setPosts(response.data.userCountPosts.length)
            
            const arrayResponse = await api.get('/posts/postsview')

            setUserPosts(arrayResponse.data)
        }
        fetchDataProfile()
    }, [])//only when opens the page for the first time

    return(

        <Container>
        
            <Content>
                <div>
                    <Button> <IoArrowBackSharp color="#dfdfdf" onClick={() => navigate('/')}  /> </Button>
                    <Button> <FaPencilAlt color="#dfdfdf" onClick={()=> navigate('/profile-edit')} /></Button>
                </div>

                <div>
                    <img src={ avatar } alt="Foto de perfil"  />
                    <h2>{user.name}</h2>
                    <span><i>@{user.username}</i></span>
                </div>

                <Info>

                    <div>
                        <span >
                            {seguindo}
                        </span>
                        <p><i>Seguindo</i></p>
                    </div>

                    <p><i>/</i></p>

                    <div>
                        <span>
                           {seguidores}
                        </span>
                        <p><i>Seguidores</i></p>
                    </div>

                    <p><i>/</i></p>

                    <div>
                        <span>
                            {posts}
                        </span>
                        <p><i>Posts</i></p>
                    </div>

                </Info>


                <Posts>
                    <h6>Posts</h6>

                    <div>
                 
                        {
                        UserPosts.map((post)=> {
                            return <Post
                            key={post.post_id}
                            content={post.content}
                            likes={post.likes}
                            postIndex={post.post_image_index}
                            user_array={[user.name, user.avatar, user.username]}
                            />
                        })
                        
                        }

                    </div>
                </Posts>
                

            </Content>

        </Container>

    );

}