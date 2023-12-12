import { Container, Perfil, Input } from "../Header/style";
import {ListComponent} from '../SearchList'
import imgPerfil from '../../img/perfil.jpg';
import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
import {api} from '../../service/api'
import defaultProfile from '../../assets/defaultavatar.png'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
export function Header() {
    const navigate = useNavigate()

    const {logout , user} = useAuth()
     
     const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultProfile 

    const [searchedUsers, setSearchedUsers] = useState([]) 
    const [inputSearch, setInputSearch] = useState('')


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/followers/searchfollowers?username=${inputSearch}`)
            setSearchedUsers(response.data)
            console.log(searchedUsers)
        }
        if(inputSearch)fetchData()
        else if(inputSearch == '')setSearchedUsers([])
        console.log(inputSearch)
    }, [inputSearch])

    const [avatar, setAvatar] = useState(avatarURL)
    return(

        <Container>
            <Perfil onClick={() => navigate('/profile')}>

                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <span>Olá, {user.name}</span>

            </Perfil>
            <div className="datalist">
                <Input 
                onChange = {e => setInputSearch(e.target.value)}
                placeholder="Pesquisar usuário"  
                type="text"/>
                <div className="listdata">
                     {
                    searchedUsers[1] && searchedUsers.map((found, index) =>   {
                        console.log(user.id, found)

                        if(user.id != found.user.id){
                           return <ListComponent 
                            key={String(index)}
                            following = {found.following}
                            user={found.user}/>
                        } 
                        
                    }  
                    
                        
                    
                    )
                    }
                </div>
               
            </div>
            

            <FaPowerOff
            
            cursor={`pointer`}
            onClick={logout}
            color="#dfdfdf"
            />    
            
        </Container>

    );

}