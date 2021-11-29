import styled from 'styled-components';

export const InputWrapper = styled.div`
    max-width: 100%; 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    
    p {
        font-family: Roboto;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 0.3rem;
        color: ${p => p.isError ? 'red' : '#424242'};
    }
`;

export const StyledInput = styled.input`
    background: #FFFFFF;
    border: 1px solid ${p => p.isError ? 'red' : '#C9CACC'};
    border-radius: 4px;
    max-width: 100%;
    width: 100%;
    height: 2.4rem;
`;

export const StyledError = styled.div`
color: red;
`;
