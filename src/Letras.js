import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letra({value}) {
    return (
        <CaixaLetra>
            <p>{value}</p>
        </CaixaLetra>
    )
}

export default function Letras() {

    return (
        <>
        {alfabeto.map((value, index) => (
            <Letra key={index} value={value} />
        ))}
        </>
    )
}

const CaixaLetra = styled.div`
    width: 30px;
    height: 30px;
    background-color: #eeeeee;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
`