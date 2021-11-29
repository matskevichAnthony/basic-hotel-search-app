import styled from 'styled-components';

export const City = styled.div`
    font-weight: bolder;
    font-size: 2rem;
    color:#424242;
    span{
        color:#A7A7A7;
        font-size:2.5rem;
        font-weight: lighter;
        margin-right: 1rem;
        margin-left: 1rem;
    }
`;

export const CurrentDate = styled.div`
    font-weight: normal;
    font-size: 1.4rem;
`;

export const FavoritesNumber = styled.div`
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    color:#424242;
`;

export const HotelList = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const UpperInformation = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;
