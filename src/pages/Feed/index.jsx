
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

  const [post_likes, setPost_likes] = useState(0)
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([])
  const [postImage, setPostImage] = useState('')
  const [user_post, setUserPost] = useState({})

  //user_avatar, username, name, post_image content, comments(array), likes
  useEffect(() => {
    async function fetchData(){
      const response = await api.get(`/posts/feed`)
      setMatrix(response.data)
      console.log(response.data)
      
    } 
    fetchData()
  }, [])

  async function fetchPost(post_id, likes){
    const response = await api.get(`/posts/inside?post_id=${post_id}`)
    console.log(response.data)
    setPost_likes(likes) 
    setContent(response.data.content)
    setComments(response.data.allCommentsInPost) 
    setPostImage(response.data.post_image_index)  
    setUserPost(response.data.userData) 
    setOpenModal(true)

  }

  useEffect(()=> {

  })

  return (
    <Container onClick={()=> {
      console.log('click')
      
    }}>

    <Modal isOpen={openModal} > 

      <div onClick={()=> {
        }} id='modal'>

          <ModalPost 
          post_likes
          content
          comments
          postImage
          user_post
          />
          
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
            onClick={() => fetchPost(post.post_id, post.likes)} 
            />
          })
           
        })

        }
      </Content>

    </div>
     
    </Container>
  )
}