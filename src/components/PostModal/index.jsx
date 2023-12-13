import {ContainerModal, Info, Interaction } from './style'
import { Commentary } from '../../components/Commentary'
import defaultavatar from '../../assets/defaultavatar.png'
import { api } from '../../service/api';
import { TbPointFilled } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";
import { useAuth } from '../../hooks/AuthContext'; 
import { useState } from 'react';


export const ModalPost = ({
  post_likes,
  content,
  comments,
  postImage,
  user_post}) => {
  const {user} = useAuth()
  const avatarURL = user_post.avatar ? `${api.defaults.baseURL}/files/${user_post.avatar}` :  defaultavatar
  const postURL = postImage ? `${api.defaults.baseURL}/files/${postImage}` :  false

  const [avatar, setAvatar] = useState(avatarURL)


  return (
        <ContainerModal>

          <Info> 
              <button>
                  <img src={avatar} alt="Foto de Perfil" />
              </button>

              <a href="#">lucas1</a>
          </Info>

         {postURL ? <img src={postURL} alt="Foto do poster" />: console.log('sem foto')}

          <p>
            {content}
          </p>

          <Interaction>
              <div>
                  <IoMdHeart cursor='pointer' />
              </div>
              
              <p>{post_likes} likes</p>
          </Interaction>

          <div id='division'>
            <h6>Comentarios</h6>
            
            <TbPointFilled />

            <span>{comments.length}</span>
          </div>
          {comments.length > 0 && comments.map(comment => {
            return <Commentary
            key={comment.id}
            user ={comment.id}
            content = {comment.content}
            />
          })}


  </ContainerModal>
  )
}
