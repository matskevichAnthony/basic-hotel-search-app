import React, { useCallback, useEffect, useState } from 'react';
import { InputWrapper, StyledInput, StyledError } from './styled';

const CustomInput = ({ title, type, errorText, verificationRule, reference }) => {
    const [isError, setIsError] = useState(false);
    const [text, setText] = useState('');

    const clear = useCallback(() => {
        setText('');
        setIsError(false);
    }, []);

    const blurHandler = useCallback((e) => {
        if (verificationRule) {
            const isCorrect = verificationRule.test(text);
            setIsError(!isCorrect);
            return isCorrect;
        }
    }, [verificationRule, text]);

    useEffect(() => {
        if (reference) {
            reference.current.validate = blurHandler;
            reference.current.clear = clear;
        }
    }, [reference, blurHandler, clear]);

    const changeHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <InputWrapper isError={isError}>
            <p>{title}</p>
            <StyledInput
                value={text}
                type={type}
                isError={isError}
                onChange={changeHandler}
                onBlur={blurHandler}
                ref={reference}
            />
            {isError && <StyledError>{errorText}</StyledError>}
        </InputWrapper>
    );
};

export default CustomInput;
