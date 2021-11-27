import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
`

export const IconWrapper = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: salmon;
    svg{
        color: #41522E;
    }
`;

export const TitleWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: silver;
    h2{
        color: gray;
    }
    p{
        color: gray;
    }
`;

export const PriceWrapper = styled.div`
    width: 45%;
    height: 100%;
    background-color: teal;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: end;
`;

export const RatingWrapper = styled.div`
    width: 100%;
`;

