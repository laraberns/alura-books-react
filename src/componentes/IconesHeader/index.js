import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from "styled-components"

const Icone = styled.li`
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
 padding: 0;
 gap:25px;
 justify-content: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone} alt='imagem de icone' />
        </Icone>
      ))}
    </Icones>
  )
}

export default IconesHeader