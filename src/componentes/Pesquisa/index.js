import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { getLivros } from "../../servicos/livros";
import { postLivrosFavoritos } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 150px 0 70px 0;
  height: 270px;

  @media (max-width: 600px) {
    padding: 150px 0 30px 0;
}
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  width: 400px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Resultados = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px; 
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius:0 0 20px 20px;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 26px;
}
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchLivros();

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLivrosPesquisados([]);
    }
  };

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function insertFavorito(id) {
    await postLivrosFavoritos(id);
    alert(`Livro inserido - ID: ${id}`);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      <Resultados>
        {livrosPesquisados.length > 0 && (
          <Dropdown ref={dropdownRef}>
            {livrosPesquisados.map((livro, index) => (
              <Resultado key={index} onClick={() => insertFavorito(livro.id)}>
                <p>{livro.nome}</p>
                <img src={`http://localhost:8000/${livro.imagem}`} alt="imagem de livro" />
              </Resultado>
            ))}
          </Dropdown>
        )}
      </Resultados>
    </PesquisaContainer>
  );
}

export default Pesquisa;
