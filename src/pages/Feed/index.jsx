
import {Container, Content} from './style'
import { Button } from '../../components/Button'
import { Post } from '../../components/Post'
import {useAuth} from '../../hooks/AuthContext'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../service/api'
import {Header} from '../../components/Header'

export const Feed = ()=>{

  const [title, setTile] = useState('')
  const {user, logout} = useAuth()
  const [matrix, setMatrix] = useState([])

  
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
            />
          })
           
        })
        }
      </Content>

    </div>
     
    </Container>
  )
}