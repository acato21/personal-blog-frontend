import { BrowserRouter } from "react-router-dom"; 
import { AuthRoutes } from "./Auth.routes";
import { AppRoutes } from "./App.routes";
import { useAuth } from '../hooks/AuthContext'

const Routes = () => {
  const {user} = useAuth()
  return (
  <BrowserRouter>
    {user ? <AppRoutes /> : <AuthRoutes />}
  </BrowserRouter>
  )
 
}
export {Routes}