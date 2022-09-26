import styled from "styled-components";
import { useState } from "react";

export default function Chute({setCor, palavraSelecionada, setLetras, setEstadoInicial, setVida}) {
    const [palpite, setPalpite] = useState("");

    function chutarPalavra(e) {
        e.preventDefault();

        if (palpite.toUpperCase() === palavraSelecionada) {
            setLetras(palavraSelecionada);
            setCor('verde');
            setEstadoInicial(false);

            setTimeout(() => {
                alert('Parabéns! Você ganhou.');
                window.location.reload();
            }, 500)
        } else {
            setVida(0);
        }
    }

    return (
        <form onSubmit={chutarPalavra}>
            <CaixaChute>
                <h2>Já sei a palavra!</h2>
                <input data-identifier="type-guess" type="text" placeholder="Escreva aqui"
                value={palpite}
                onChange={(e) => setPalpite(e.target.value)}
                />
                <button data-identifier="guess-button">Chutar</button>
            </CaixaChute>
        </form>
    )
}

const CaixaChute = styled.div`
    width: 66%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 20px;
    input {
        height: 28px;
        padding-left: 6px;
    }
    button {
    width: 70px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #CEE3F6;
    border: 1px solid #6495ED;
    color: #0B3861;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    }
`