import React, { useRef } from 'react';
import CustomInput from '../../components/UiKit/CustomInput';
import CustomButton from '../../components/UiKit/CustomButton';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../actions/Auth';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^[a-zA-Z0-9]{8,}$/;

const Login = () => {

    const loginRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const clickHandler = () => {
        const { value: loginValue, validate: validateLogin, refresh: refreshLogin } = loginRef.current;
        const { value: passwordValue, validate: validatePassword, refresh: refreshPassword } = passwordRef.current;
        const isValidLogin = validateLogin();
        const isValidPassword = validatePassword();
        if (isValidLogin && isValidPassword) {
            dispatch(authenticate(loginValue, passwordValue));
            refreshLogin();
            refreshPassword();
        }
    };

    return (
        <div>
            <CustomInput
                title={'Логин'}
                type={'email'}
                errorText={"Ошибка, имейл"}
                verificationRule={emailRegExp}
                reference={loginRef}
            />
            <CustomInput
                title={'Пароль'}
                type={'text'}
                errorText={"Ошибка, пароль"}
                verificationRule={passwordRegExp}
                reference={passwordRef}
            />
            <CustomButton title={'Войти'} onClick={clickHandler} />
        </div>
    )
}

export default Login;