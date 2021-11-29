import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 95%;
    height: ${p => !p.compact ? '6rem' : '8rem'};
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
    width: 100%;
    height: ${p => p.compact ? `70%` : `100%`};
    display: flex;
    flex-direction: column;
    justify-content:  ${p => p.compact ? `space-around` : `center`};
    gap:0.3rem;
    
    h2{
        color: gray;
    }
    
    p{
        color: gray;
    }
`;

export const Title = styled.p`
    width: 100%;
    font-size: ${p => !p.compact ? '1rem' : '0.8rem'};
    font-weight:light;
`;

export const StyledDate = styled.p`
    font-size: ${p => !p.compact ? '0.8rem' : '0.6rem'};
    font-weight:normal;
`;

export const PriceWrapper = styled.div`
    width: 20%;
    height: 75%;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    gap:1rem;
    svg{
        width: 15rem;
        height: 2rem;
    }
`;

export const Price = styled.div`
    width: 8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: lighter;
    color: gray;
    gap:1rem;
    font-size: 0.7rem;
    b{
        color:#424242;
        font-weight: normal;
        font-size:${p => !p.compact ? '1.3rem' : '1.8rem'};
        padding-bottom: 0.2rem;
    }
`;

export const HeartWrapper = styled.div`
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        margin-left: 2rem;
    }
`;

export const HouseIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;