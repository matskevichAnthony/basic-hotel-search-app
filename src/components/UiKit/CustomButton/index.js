import React from 'react';
import { StyledButton } from './styled';

const CustomButton = ({ title, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{title}</StyledButton>
    );
};

export default CustomButton;
