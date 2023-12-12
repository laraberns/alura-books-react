import { Link } from "react-router-dom"
import styled from "styled-components"

const Opcao = styled.li`
  font-size: 20px;
  display: flex;
  cursor: pointer;
  color: #0C3C60;
  font-weight: 500;
`

const Opcoes = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
`

const textoOpcoes = ['FAVORITOS']

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Link to={`/${texto.toLowerCase()}`} key={index}>
        <Opcao>
          <p>{texto}</p>
        </Opcao>
        </Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader