
import {Container, Content } from './style'
import { Button } from '../../components/Button'
import { Post } from '../../components/Post'
import {useAuth} from '../../hooks/AuthContext'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../service/api'
import {Header} from '../../components/Header'
import { ModalPost } from '../../components/PostModal'
import { Modal } from '../../components/Modal'
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

  useEffect(()=> {

  })

  return (
    <Container onClick={()=> {
      console.log('click')
      
    }}>

    <Modal isOpen={openModal} > 

      <div onClick={()=> {
        }} id='modal'>

          <ModalPost />
          
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