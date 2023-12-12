import {Route, Routes} from 'react-router-dom'

import { Login } from '../pages/login'
import { Register } from '../pages/Register'

export const AuthRoutes = () => {
    return (
      <Routes>
      <Route path = '/' element= {<Login />}/>
      <Route path = '/register' element= {<Register />}/>
    </Routes>
  )

}


    
