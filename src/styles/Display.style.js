import styled from "styled-components";

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: center;
    }
`;