import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { styled, StyleSheetManager } from 'styled-components'
import angularImg from "../../imagens/angular.png"
import reactImg from "../../imagens/react.webp"
import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/livros'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    margin: 20px 0;

    img {
        width: 20%;
        max-width: 275px;
    }

    @media (max-width: 900px) {
        flex-wrap: wrap;

        img {
            width: 25%; 
            margin: 5px;
        }
    }
`;

const Cards = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 20px;

    @media (max-width: 1100px) {
        gap: 0px;
        flex-direction: column;
    }
`;

function UltimosLancamentos() {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'cor'}>
            <UltimosLancamentosContainer>
                <Titulo
                    cor="#EB9B00"
                    tamanhofonte="36px"
                >ÚLTIMOS LANÇAMENTOS
                </Titulo>
                <NovosLivrosContainer>
                    {livros.map((livro, index) =>
                        <img src={`http://localhost:8000/${livro.imagem}`} alt="imagem de livro" />
                    )}
                </NovosLivrosContainer>
                <Cards>
                <CardRecomenda
                    titulo="Talvez você se interesse por..."
                    subtitulo="Angular 11 e Firebase"
                    descricao="Construindo uma aplicação com a plataforma Google"
                    imagem={angularImg}
                />
                  <CardRecomenda
                    titulo="O mais recomendado:"
                    subtitulo="React"
                    descricao="Se adventure na criação de Single Page Applications!"
                    imagem={reactImg}
                />
                </Cards>
            </UltimosLancamentosContainer>
        </StyleSheetManager>
    )
}

export default UltimosLancamentos