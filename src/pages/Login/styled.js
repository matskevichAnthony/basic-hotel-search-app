import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${require('../../assets/carouselImages/image1.jpg').default});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginWindow = styled.div`
    width: 25rem;
    height: 25rem;
    padding: 2rem;
    border-radius: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    background:white;
    
    button{
        width: 100%;
        height: 7rem;
    }
    
    h1{
        font-size: 1.5rem;
    }
`;
