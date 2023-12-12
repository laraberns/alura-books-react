import {styled,  StyleSheetManager} from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 20px auto;
    max-width: 500px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  

    @media (max-width: 700px) {
        max-width:80%;
    }
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    font-weight: 900;
    display: block;
    margin-top: 5px;
    text-align: center;
    width: 150px;
    margin-left:20px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
    margin-left:20px;
`

function CardRecomenda({ titulo, subtitulo, descricao, imagem }) {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'cor'}>
        <Card>
            <div>
                <Titulo
                    tamanhofonte="24px"
                    cor="#EB9B00"
                    alinhamento="left"
                >{titulo}
                </Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={imagem} alt="imagem do card" />
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
        </StyleSheetManager>
    )
}

export default CardRecomenda