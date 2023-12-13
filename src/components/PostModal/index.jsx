import {ContainerModal, Info, Interaction } from './style'
import { Commentary } from '../../components/Commentary'
import avatar from '../../img/perfil.jpg'

import { TbPointFilled } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";
import { useAuth } from '../../hooks/AuthContext'; 

export const ModalPost = () => {
  const {user} = useAuth()
  
  return (
        <ContainerModal>

          <Info> 
              <button>
                  <img src={avatar} alt="Foto de Perfil" />
              </button>

              <a href="#">lucas1</a>
          </Info>

          <img src={avatar} alt="Foto do poster" />

          <p>
              descricao
          </p>

          <Interaction>
              <div>
                  <IoMdHeart cursor='pointer' />
              </div>
              
              <p>26 likes</p>
          </Interaction>

          <div id='division'>
            <h6>Comentario</h6>
            
            <TbPointFilled />

            <span>23</span>
          </div>
          <Commentary />


  </ContainerModal>
  )
}
