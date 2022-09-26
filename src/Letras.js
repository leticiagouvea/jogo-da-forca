import { useState } from "react";
import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letra({letra, palavraSecreta, vida, setVida, letras, setLetras, estadoInicial, setEstadoInicial, setCor}) {
    const [desativar, setDesativar] = useState(false);

    function verificarLetra() {
        console.log(palavraSecreta.indexOf(letra))
        const indice = palavraSecreta.indexOf(letra);
        setDesativar(true);

        if (indice === -1) {
            setVida(vida - 1)
        } else {
            const indiceLetras = [];

            palavraSecreta.forEach((value, indice) => {
                if (value === letra) {
                    indiceLetras.push(indice)
                }
            })

            const renderizaLetra = letras;

            indiceLetras.forEach((indice) => {
                renderizaLetra[indice] = letra.toUpperCase()
            })

            setLetras([...renderizaLetra]);
            venceuJogo()
        }

        function venceuJogo() {
            if (!letras.includes("_ ")) {
                setCor('verde');
                setEstadoInicial(false);
            }
        }
    }

    return (
        <CaixaLetra disabled={desativar} estadoInicial={estadoInicial} onClick={verificarLetra}>
            {letra}
        </CaixaLetra>
    )
}

export default function Letras({palavraSecreta, vida, setVida, letras, setLetras, estadoInicial, setEstadoInicial, setCor}) {

    return (
        <>
        {alfabeto.map((letra, index) => (
            <Letra key={index} letra={letra} palavraSecreta={palavraSecreta} vida={vida} setVida={setVida} letras={letras} setLetras={setLetras} estadoInicial={estadoInicial} setEstadoInicial={setEstadoInicial} setCor={setCor}/>
        ))}
        </>
    )
}

const CaixaLetra = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.estadoInicial === false ? "#A4A4A4" : "#CEE3F6")};
    color: ${(props) => (props.estadoInicial === false ? "#696969" : "#0B3861")};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
    border: ${(props) => (props.estadoInicial === false ? "0px" : "1px solid #6495ED")};
    cursor: ${(props) => (props.estadoInicial === false ? "default" : "pointer")};
    pointer-events: ${(props) => (props.estadoInicial === false ? "none" : "initial")};
`