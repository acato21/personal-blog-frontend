import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  z-index: 222;
  background: white;
  border-bottom: 1px solid grey;
  cursor: pointer;
  &:last-child{
    border: none;
  }
  &:hover{
    filter: brightness(0.96);
  }
  .user-info{
    display: flex;
    gap:3px;
    align-items: center;
    img{
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

  }
`