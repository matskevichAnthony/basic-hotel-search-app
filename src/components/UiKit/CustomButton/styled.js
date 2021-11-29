import styled from "styled-components";

export const StyledButton = styled.button`
    max-width: 100%;
    width: 116px;
    height: 34px;
    left: 50px;
    top: 88px;
    background: rgb(65,82,46);
    background: linear-gradient(90deg, rgba(65,82,46,1) -15.34%, rgba(190,128,34,1) 145.95%);
    box-shadow: 0 4px 33px rgba(0,0,0,0.04);
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 19px;
    color: #FFFFFF;
    
    &:hover{
        color:red;
    }
`;
