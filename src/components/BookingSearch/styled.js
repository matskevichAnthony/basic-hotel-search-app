import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 82%;
    resize: both;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 4px 33px rgba(0,0,0,0.04);
    padding: 1rem;
`;

export const BookingForm = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    gap:1rem;
    
    button{
        width: 100%;
    }
`;
