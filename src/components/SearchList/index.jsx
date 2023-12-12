import React, { useEffect } from 'react'
import { Container } from './style'
import { Button } from '../Button'
import { api } from '../../service/api'
import defaultAvatar from '../../assets/defaultavatar.png'
import { useState } from 'react'

const ListComponent = ({user, following}) => {
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar 
  
  const [avatar, setAvatar] = useState(avatarURL)
  const [isFollowing, setIsFollowing] = useState(following)

  console.log(user.id)
  const connect = async () => {
    const response = await api.post(`/followers/follow?followed_id=${user.id}`)
    setIsFollowing(response.data)
    console.log(response.data)
  }
  
  const disconnect = async () => {
    await api.delete(`/followers/unfollow?unfollowing=${user.id}`)
    setIsFollowing(false)
  }

  useEffect(() => {
    
  }, [isFollowing])

  return (
    <Container>
      <div className='user-info'>
        <img src={avatarURL} alt="user image" />
        <h5>{user.username}</h5>
      </div>
      <div className="button">
        {
        isFollowing ? <Button title="Seguindo" onClick={disconnect} /> :<Button title='Seguir' onClick={connect}/>}
      </div>

    </Container>
  )
}

export  {ListComponent}