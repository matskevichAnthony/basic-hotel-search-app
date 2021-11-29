import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 95%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid #F5F5F5;
    gap:1rem;
`;

export const Icon = styled.div`
    width: 10%;
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
    padding: 0.8rem;
    border-radius: 50%;
`;

export const TitleWrapper = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:0.3rem;
    
    h2{
        color: gray;
    }
    
    p{
        color: gray;
    }
`;

export const Title = styled.p`
    display: block;
    font-size: 1.1rem;
    font-weight:light;
`;

export const StyledDate = styled.p`
    display: block;
    font-size: 0.8rem;
    font-weight:normal;
`;

export const PriceWrapper = styled.div`
    width: 25%;
    height: 80%;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap:1rem;
`;

export const Price = styled.div`
    width: 8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: lighter;
    color: gray;
    gap:1rem;
    font-size: 0.8rem;
    
    b{
        color: black;
        font-weight: normal;
        font-size:1.2rem;
        padding-bottom: 0.2rem;
    }
`;
