import React from 'react';
import { InputWrapper, StyledInput } from './styled';
const CustomInput = ({ title, type }) => {

    return (
        <InputWrapper>
            <p>{title}</p>
            <StyledInput type={type} />
        </InputWrapper>
    )

}

export default CustomInput;