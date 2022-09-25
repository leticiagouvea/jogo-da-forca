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
    background-color: #A4A4A4;
    color: #696969;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
    /* 
    background-color: #CEE3F6;
    border: 1px solid #6495ED;
    color: #0B3861;
    cursor: pointer;
    */
`