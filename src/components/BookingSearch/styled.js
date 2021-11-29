import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 90%;
    width: 82%;
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
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    gap:1rem;
    button{
        font-size: 1rem;
        height: 70%;
        width: 100%;
    }
    input{
        height: 60%;
    }
`;
