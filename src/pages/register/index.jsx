import { useState, useEffect, useRef } from "react";
import { Container } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Button_text } from "../../components/Button_text";
import { Screen_log } from "../../components/Screen_log";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

export function Register() {

  const {register} = useAuth()

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const handleRegister = async()=>{
    if(!email || !password || !confirmPassword || !username || !name)return alert('Preencha todos os campos!')

    if(password != confirmPassword)return alert('As senhas diferem!')
    await register({email, name, username, password})
    navigate('/')
  }
  return(

    <Container>

      <Screen_log title='Cadastro'>

        <Input 
        onChange={e => setName(e.target.value)}
        placeholder='Seu nome' 
        type='text' required/>

        <Input 
        onChange={e => setUsername(e.target.value)}
        placeholder='Username' 
        type='text' required />

        <Input 
        onChange={e => setEmail(e.target.value)}
        placeholder='Email' 
        type='email' required />

        <Input 
        onChange={e => setPassword(e.target.value)}
        placeholder='Senha'
        type='password' required />

        <Input 
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirmar senha' 
        type='password' required />
        <Link to = "/">
          <Button_text 
          title='Já possui um cadastro?'/>
        </Link>

        <Button
        onClick={handleRegister} 
        title='Cadastrar' /> 

      </Screen_log>
    </Container>
    
  );

}