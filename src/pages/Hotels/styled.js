import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 70vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const LeftSideWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
`;

export const ContentDiv = styled.div`
    height: 100%;
    width: 82%;
    resize: both;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 33px rgba(0,0,0,0.04);
`;
export const ResultsDiv = styled.div`
    height: 100%;
    width: 100%;
    max-width: 65%;
    padding:2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 33px rgba(0,0,0,0.04);
`;

export const HotelListWrapper = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const UpperInformationWrapper = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CityWrapper = styled.div`
    font-weight: bolder;
    font-size: 2rem;
`;

export const DateWrapper = styled.div`
    font-weight: normal;
    font-size: 1.4rem;
`;