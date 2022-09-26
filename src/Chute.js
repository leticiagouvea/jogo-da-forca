import styled from "styled-components";

export default function Chute() {
    return (
        <CaixaChute>
            <h2>Já sei a palavra!</h2>
            <input type="text" placeholder="Escreva aqui"></input>
            <button>Chutar</button>
        </CaixaChute>
    )
}

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
    font-weight: 500;
    cursor: pointer;
    }
`