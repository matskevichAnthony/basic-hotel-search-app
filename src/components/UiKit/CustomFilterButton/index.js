import React from "react";
import { ButtonWrapper, Arrow, ArrowWrapper } from "./styled";
const CustomFilterButton = () => {
    return (
        <ButtonWrapper>
            Rating
            <ArrowWrapper>
                <Arrow>^</Arrow>
                <Arrow>^</Arrow>
            </ArrowWrapper>
        </ButtonWrapper>
    )
}

export default CustomFilterButton;