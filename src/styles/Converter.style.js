import styled from "styled-components";

export const ConvertContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const AmountInput = styled.input`
    padding: 10px;
    font-family: monospace;
    font-size: 1.5rem;
    border: none;
`;

export const BaseCurrencyStyle = styled.select`
    padding: 10px;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
`;

export const TargetCurrencyStyle = styled.select`
    padding: 10px;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
`;

export const ConvertBtn = styled.input`
    padding: 10px;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #ffd500;
    border: none;
`;

