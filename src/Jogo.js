import styled from "styled-components";
import palavras from "./palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import forca0 from "./assets/imgs/forca0.png";
import forca1 from "./assets/imgs/forca1.png";
import forca2 from "./assets/imgs/forca2.png";
import forca3 from "./assets/imgs/forca3.png";
import forca4 from "./assets/imgs/forca4.png";
import forca5 from "./assets/imgs/forca5.png";
import forca6 from "./assets/imgs/forca6.png";
import { useEffect, useState } from "react";

export default function Jogo() {
    const [vida, setVida] = useState(6);
    const [palavraSecreta, setPalavraSecreta] = useState([]);
    const [letras, setLetras] = useState([]);
    const [estadoInicial, setEstadoInicial] = useState(false);
    const [cor, setCor] = useState("");
    const [palavraSelecionada, setPalavraSelecionada] = useState("");
    const [desativarBotao, setDesativarBotao] = useState(false);

    const arrayPalavras = palavras;

    arrayPalavras.sort(comparador)
    function comparador() {
        return Math.random() - 0.5;
    }

    const palavra = arrayPalavras.slice(0, 1).toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const arrayPalavra = palavra.split("");

    useEffect(() => {
        if (vida === 0) {
            setCor('vermelho');
            setLetras(palavraSelecionada);
            setEstadoInicial(false);

            setTimeout(() => {
                alert('Você perdeu!');
                window.location.reload();
            }, 500)
        }
    }, [vida])

    function iniciarJogo() {
            setPalavraSecreta(arrayPalavra);
            setLetras(Array(arrayPalavra.length).fill("_ "));
            setEstadoInicial(true);
            setCor("");
            setPalavraSelecionada(palavra);
            setDesativarBotao(true);

            console.log(palavra)
            console.log(arrayPalavra)
    }

    return (
        <Conteudo>
            <h1>Jogo da forca</h1>
            <Forca>
                <img src={vida === 6 ? (forca0) : vida === 5 ? (forca1) : vida === 4 ? (forca2) : vida === 3 ? (forca3) : vida === 2 ? (forca4) : vida === 1 ? (forca5) : (forca6)} alt="forca" />
            </Forca>

            <Botao disabled={desativarBotao} onClick={iniciarJogo}>
                <p>Escolher palavra</p>
            </Botao>

            <Palavra>
                <span className={cor}>{letras}</span>
            </Palavra>

            <CaixaLetras>
                <Letras palavraSecreta={palavraSecreta} vida={vida} setVida={setVida} letras={letras} setLetras={setLetras} estadoInicial={estadoInicial} setEstadoInicial={setEstadoInicial} setCor={setCor} />
            </CaixaLetras>

            <Chute />
        </Conteudo>
    )
}

const Conteudo = styled.div`
    width: 600px;
    height: 600px;
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
    h1 {
        font-size: 40px;
        font-weight: bold;
        color: #0B3861;
        text-align: center;
        margin-bottom: 10px;
    }
`

const Forca = styled.div`
    img {
        max-width: 300px;
    }
`

const CaixaLetras = styled.div`
    margin: 0 auto;
    width: 75%;
    height: 78px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 5px;
    margin-top: 20px;
`

const Botao = styled.button`
    width: 140px;
    height: 40px;
    font-size: 14px;
    background-color: #27AE60;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0px;
    font-weight: bold;
    position: absolute;
    right: 30px;
    top: 75px;
    cursor: pointer;
`

const Palavra = styled.div`
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    right: 30px;
    bottom: 190px;

    .vermelho {
        color: red;
    }

    .verde {
        color: #27AE60;
    }
`