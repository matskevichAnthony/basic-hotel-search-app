import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 65%;
    height: 85vh;
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
    gap: 1rem;
`;

export const RightSideWrapper = styled.div`
    height: 100%;
    width: 65%;
    max-width: 65%;
    padding:2rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 4px 33px rgba(0,0,0,0.04);
`;
