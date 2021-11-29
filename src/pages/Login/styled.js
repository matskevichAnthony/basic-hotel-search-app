import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
        content: "";
        position: absolute;
        z-index: -100;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        background-image: url(${require('../../assets/backgroundImage.png').default});
        background-size: cover;
        filter: blur(5px) brightness(1);
    }
    &:after{
        content: "";
        position: absolute;
        z-index: -99;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        background-color: white;
        opacity: 0.5;
        background-size: cover;
        filter: brightness(3);
    }
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
    background:white;
    
    button{
        width: 100%;
        height: 3rem;
    }
    
    h1{
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
`;

export const InputsWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction:column;
`