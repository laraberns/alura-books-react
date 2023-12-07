import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import angularImg from "../../imagens/angular.png"

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
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro =>
                    <img src={livro.src}
                        alt='foto de livro'
                    />)}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11 e Firebase"
                descricao="Construindo uma aplicação com a plataforma Google"
                imagem={angularImg}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos