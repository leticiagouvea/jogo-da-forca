import styled from "styled-components";
import palavras from "./palavras";
import Letras from "./Letras";
import forca0 from "./assets/imgs/forca0.png";
import forca1 from "./assets/imgs/forca1.png";
import forca2 from "./assets/imgs/forca2.png";
import forca3 from "./assets/imgs/forca3.png";
import forca4 from "./assets/imgs/forca4.png";
import forca5 from "./assets/imgs/forca5.png";
import forca6 from "./assets/imgs/forca6.png";

export default function Jogo() {
    const arrayPalavras = palavras;

    arrayPalavras.sort(comparador)
    function comparador() {
        return Math.random() - 0.5;
    }

    const palavra = arrayPalavras.slice(0, 1).toString();
    const arrayPalavra = palavra.split("");
    console.log(arrayPalavra)

    return (
        <Conteudo>
            <Forca>
                <img src={forca0} alt="forca" />
            </Forca>

            <Botao>
                <p>Escolher palavra</p>
            </Botao>

            <Palavra>

            </Palavra>

            <CaixaLetras>
                <Letras />
            </CaixaLetras>

        </Conteudo>
    )
}

const Conteudo = styled.div`
    background-color: lightblue;
    max-width: 614px;
    min-height: 600px;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
`

const Forca = styled.div`
    img {
        max-width: 300px;
    }
`

const CaixaLetras = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 5px;
    margin-top: 20px;
`

const Botao = styled.div`
    width: 130px;
    height: 40px;
    background-color: #27AE60;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    position: absolute;
    right: 50px;
    top: 50px;
    @media (max-width: 485px) {
        top: 200px;
    }
`

const Palavra = styled.div`

`