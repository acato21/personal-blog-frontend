import {Route, Routes} from 'react-router-dom'
import {Feed} from '../pages/Feed'
import { Profile } from '../pages/Profile'
import { ProfileEdit } from '../pages/ProfileEdit'
import { Modal } from '../components/Modal'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Feed/>}/>
      <Route path='/profile' element = { <Profile/> } />
      <Route path='/profile-edit' element = { <ProfileEdit/> } />
      <Route path='/modal' element = { <Modal/> } />
    </Routes>
  )
}

export {AppRoutes}