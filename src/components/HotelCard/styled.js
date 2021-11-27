import styled from "styled-components";

export const CardWrapper = styled.div`
    max-width: 95%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid #F5F5F5;
`

export const IconWrapper = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    svg{
        color: #41522E;
    }
`;
export const IconBackground = styled.div`
background-color: #F5F5F5;;
padding: 1rem;
border-radius: 50%;
`

export const TitleWrapper = styled.div`
    min-width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        color: gray;
    }
    p{
        color: gray;
    }
`;

export const PriceWrapper = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap:1rem;
`;

export const RatingWrapper = styled.div`
    width: 100%;
`;

export const StyledPrice = styled.div`
display: block;
font-weight: lighter;
color: gray;
b{
    color: black;
}
`;

export const StyledHotelName = styled.p`
display: block;
font-size: 1.2rem;
font-weight:lighter;
`;

export const StyledDate = styled.p`
display: block;
font-size: 0.9rem;
font-weight:lighter;
`;


