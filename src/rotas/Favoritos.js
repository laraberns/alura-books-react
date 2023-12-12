import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteLivrosFavoritos, getLivrosFavoritos } from '../servicos/favoritos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    text-align: center;
    padding: 0 100px;
    position: relative;
    p {
        width: 200px;
        font-size: 30px;
        color: #FFF;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid white;
    }

    svg {
        position: absolute;
        top: 5px; 
        right:20px; 
        cursor: pointer;
        color: #FFF;
        font-size: 30px;
    }

    @media (max-width: 700px) {
      img {
        width: 35%;
    }
    padding: 0px;
    }
    p {
      font-size: 20px;
  }

`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 125px;
    margin: 0 0 25px 0;
`

function Favoritos() {

  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchLivrosFavoritos()
  }, [])

  async function fetchLivrosFavoritos() {
    const livrosFavoritosAPI = await getLivrosFavoritos()
    setFavoritos(livrosFavoritosAPI)
  }

  async function deleteLivroFavorito(id) {
    await deleteLivrosFavoritos(id)
    await fetchLivrosFavoritos()
    alert(`Livro deletado - ID: ${id}`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map((favorito, index) => (
              <Resultado key={index}>
                <img src={`http://localhost:8000/${favorito.imagem}`} alt="imagem de livro" />
                <p>{favorito.nome}</p>
                <FontAwesomeIcon 
                icon={faTimes} 
                style={{ marginLeft: '10px', cursor: 'pointer' }} 
                onClick={() => { 
                  deleteLivroFavorito(favorito.id) 
                  }}
                  />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
