import { Container, Content } from "./style";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/AuthContext";
import perfil from '../../img/perfil.jpg'
import { useEffect, useState } from "react";
export function Commentary({user_id, content, name}) {

    useEffect(() =>{
        
        async function fetchUser(){
            const user = await api.get('/')
        }
    }, [])

    return(

        <Container>
            <button>
                <img src={perfil} alt="fot de perfil" />
            </button>

            <Content>
                <div>
                    <a href="#">lucas1</a>

                    <button>+seguir</button>
                </div>

                <p>{content}</p>
            </Content>
        </Container>

    );

}