import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 82%;
    resize: both;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 4px 33px rgba(0,0,0,0.04);
    padding: 1.5rem;
    gap: 1rem;
`;

export const FavoritesTop = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    color:#424242;
    gap: 1rem;
`;

export const FilterButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export const FilterButton = styled.button`
    background:#FFFFFF;
    padding: 0.3rem;
    color: #E3E3E3;
    width: 6rem;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color: black;
        border: 1px solid black;
    }
`;

export const ArrowWrapper = styled.span`
    pointer-events: none;
    display:flex;
    flex-direction: column;
    height: 150%;
    margin-left: 0.5rem;
`;

export const Arrow = styled.span`
    color: #E3E3E3;
    margin-bottom: -0.45rem;
`;