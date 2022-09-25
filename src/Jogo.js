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
            <h1>Jogo da forca</h1>
            <Forca>
                <img src={forca0} alt="forca" />
            </Forca>

            <Botao>
                <p>Escolher palavra</p>
            </Botao>

            <Palavra>
                <ion-icon name="remove-outline"></ion-icon>
                <ion-icon name="remove-outline"></ion-icon>
                <ion-icon name="remove-outline"></ion-icon>
                <ion-icon name="remove-outline"></ion-icon>
                <ion-icon name="remove-outline"></ion-icon>
            </Palavra>

            <CaixaLetras>
                <Letras />
            </CaixaLetras>

            <CaixaChute>
                <h2>Já sei a palavra!</h2>
                <input placeholder="Escreva aqui"></input>
                <p>Chutar</p>
            </CaixaChute>
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

const Botao = styled.div`
    width: 140px;
    height: 40px;
    font-size: 14px;
    background-color: #27AE60;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
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
`

const CaixaChute = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-size: 15px;
    margin-top: 20px;
    input {
        height: 28px;
        padding-left: 6px;
    }
    p {
    width: 70px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #CEE3F6;
    border: 1px solid #6495ED;
    color: #0B3861;
    font-weight: 500;
    cursor: pointer;
    }
`