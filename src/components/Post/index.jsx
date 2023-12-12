import { Container, Info, Interaction } from "./style";

import { Modal } from '../Modal'

import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

import {useAuth} from '../../hooks/AuthContext'
import defaultavatar  from '../../assets/defaultavatar.png'
import {api} from '../../service/api'
import { useState, useEffect } from "react";

export function Post({post_id, content, postIndex, likes, user_array}){
    
    const [name, user_avatar, username] = user_array
    const avatarURL = user_avatar ? `${api.defaults.baseURL}/files/${user_avatar}` : defaultavatar 
    const postURL = postIndex ? `${api.defaults.baseURL}/files/${postIndex}` : null
    const [avatar, setAvatar] = useState(avatarURL)
    const [postImage, setPostImage ] = useState(postURL)
    const [wasLiked, setWasLiked]= useState(false)
    const [openModal, setOpenModal] = useState(false)

    async function handleInsideMoreInfo(){
        console.log(post_id)
        const response = await api.get(`/posts/inside?post_id=${post_id}`)
        console.log(response.data)
    }

    async function handleLike(){
        const response = await api.post(`/likes/like?post_id=${post_id}`)
        console.log(response.data.wasLiked)
        setWasLiked(response.data.wasLiked)
    }
    //atualizacao
    async function handleUnlike () {
        const res =await api.delete(`/likes/unlike?post_id=${post_id}`)
        console.log(res.data.wasLiked)
        setWasLiked(false)
    }

    useEffect(() => {
        async function fetchWasliked(){
            const response = await api.get(`/likes/check?post_id=${post_id}`)
            setWasLiked(response.data.liked)
        }

        fetchWasliked()
    }, [wasLiked, likes])
    
    return(

        <Container onClick={handleInsideMoreInfo}>

        <Modal isOpen={openModal}> 

            <div id='modal'>
                <div>
                    <span>Comentários <TbPointFilled /> </span>
                    <p>56</p>
                </div>
            </div>

        </Modal>

            <Info> 
                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <a href="#">{name}</a>
            </Info>
            {
                postImage && <img src={postImage} alt="Foto de Post" />
            }
            <p>
                {content}
            </p>

            <Interaction>
                <div>
                    {wasLiked ? <IoMdHeart onClick={handleUnlike}/> : <GoHeart onClick={handleLike}/>} 
                    <button onClick={() => setOpenModal(true)} ><FaRegCommentDots /></button>
                </div>
               
                <p>{likes.likes} likes</p>
            </Interaction>

            

        </Container>

    );

}