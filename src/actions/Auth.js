import cookie from 'react-cookies';

export const authenticate = (login, password) => {

    return dispatch => {
        const authData = {
            login,
            password,
        };

        cookie.save('authData', authData, { path: '/' });
        dispatch({
            type: 'AUTH_USER',
            payload: {
                isAuth: true,
                login,
                password,
            }
        });
    };

};

export const checkLogin = () => {
    return dispatch => {
        const authData = cookie.load('authData');
        dispatch({
            type: 'AUTH_USER',
            payload: {
                isAuth: !!authData,
                ...authData,
            }
        });
    };
}

export const logout = () => {
    return dispatch => {
        cookie.remove('authData');
        dispatch({
            type: 'AUTH_USER',
            payload: {
                isAuth: false,
                login: '',
                password: '',
            }
        });
    };
}