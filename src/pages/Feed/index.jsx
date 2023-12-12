
import {Container, Content, ContainerModal, Info, Interaction} from './style'
import { Button } from '../../components/Button'
import { Post } from '../../components/Post'
import {useAuth} from '../../hooks/AuthContext'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../service/api'
import {Header} from '../../components/Header'
import { Modal } from '../../components/Modal'
import avatar from '../../img/perfil.jpg'
import { Commentary } from '../../components/Commentary'

import { TbPointFilled } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";

export const Feed = ({isOpen})=>{


  const [title, setTile] = useState('')
  const {user, logout} = useAuth()
  const [matrix, setMatrix] = useState([])
  const [openModal, setOpenModal] = useState(true)


  
  useEffect(() => {
    async function fetchData(){
      const response = await api.get(`/posts/feed`)
      setMatrix(response.data)
      console.log(response.data)
    } 
    fetchData()
  }, [])

  return (
    <Container>

    <Modal isOpen={openModal} > 

      <div id='modal'>
          
          <ContainerModal>

            <Info> 
                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <a href="#">lucas1</a>
            </Info>
            
            <img src={avatar} alt="Foto do poster" />

            <p>
                descricao
            </p>

            <Interaction>
                <div>
                    <IoMdHeart cursor='pointer' />
                </div>
                
                <p>26 likes</p>
            </Interaction>

            <div>
              <h6>Comentario</h6>
              
              <TbPointFilled />

              <span></span>
            </div>
            <Commentary />


          </ContainerModal>
      </div>

    </Modal>
      
    <Header />
    <div className="conteudo">
       <Content
    
      >
        {
        matrix.map(posts => {
          return posts.map((post, index) => {
            return <Post
            key={String(index)}
            content={post.content}
            postIndex={post.post_image_index}
            user_array={[post.name, post.avatar, post.username]}
            likes = {post.postLikes}
            post_id={post.post_id}
            onClick={() => setOpenModal(true)} 
            />
          })
           
        })

        }
      </Content>

    </div>
     
    </Container>
  )
}