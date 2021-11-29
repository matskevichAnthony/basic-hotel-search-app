import styled from "styled-components";

export const ButtonWrapper = styled.div`
    background:#FFFFFF;
    padding: 0.3rem;
    color: #E3E3E3;
    width: 5rem;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover{
        color: black;
    }
    `;

export const Arrow = styled.span`
    color: #E3E3E3;
`;

export const ArrowWrapper = styled.span`
    display:flex;
    flex-direction: column;
`;