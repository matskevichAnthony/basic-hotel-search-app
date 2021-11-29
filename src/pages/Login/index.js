import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import CustomInput from '../../components/UiKit/CustomInput';
import CustomButton from '../../components/UiKit/CustomButton';
import { LoginWrapper, LoginWindow, InputsWrapper } from './styled';
import { USER_AUTHENTICATE } from '../../store/constants';

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^[a-zA-Z0-9]{8,}$/;

const Login = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const clickHandler = () => {
        const { value: loginValue, validate: validateLogin } = loginRef.current;
        const { value: passwordValue, validate: validatePassword } = passwordRef.current;

        const isValidLogin = validateLogin();
        const isValidPassword = validatePassword();
        if (isValidLogin && isValidPassword) {
            dispatch({
                type: USER_AUTHENTICATE,
                payload: {
                    login: loginValue,
                    password: passwordValue,
                },
            });
            clearAll();
        }
    };

    const clearAll = () => {
        const { clear: clearLogin } = loginRef.current;
        const { clear: clearPassword } = passwordRef.current;

        clearLogin();
        clearPassword();
    };

    return (
        <LoginWrapper>
            <LoginWindow>
                <h1>Simple Hotel Check</h1>
                <InputsWrapper>
                    <CustomInput
                        title={'Логин'}
                        type={'email'}
                        errorText={'Ошибка, email'}
                        verificationRule={emailRegExp}
                        reference={loginRef}
                    />
                    <CustomInput
                        title={'Пароль'}
                        type={'text'}
                        errorText={'Ошибка, пароль'}
                        verificationRule={passwordRegExp}
                        reference={passwordRef}
                    />
                </InputsWrapper>
                <CustomButton title={'Войти'} onClick={clickHandler} />
            </LoginWindow>
        </LoginWrapper>
    );
};

export default Login;
