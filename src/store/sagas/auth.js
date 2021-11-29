import { put, takeEvery, call } from 'redux-saga/effects';
import cookie from 'react-cookies';
import { USER_AUTHENTICATE, USER_CHECK_LOGIN, USER_LOGOUT, USER_SET } from '../constants';

function* authenticate({ payload }) {
    yield call(cookie.save, 'authData', payload, { path: '/' });
    yield put({
        type: USER_SET,
        payload: {
            isAuth: true,
            ...payload,
        },
    });
}

function* checkLogin() {
    const authData = yield call(cookie.load, 'authData');
    yield put({
        type: USER_SET,
        payload: {
            isAuth: !!authData,
            ...authData,
        },
    });
}

function* logout() {
    yield call(cookie.remove, 'authData');
    yield put({
        type: USER_SET,
        payload: {
            isAuth: false,
            login: '',
            password: '',
        },
    });
}

function* auth() {
    yield takeEvery(USER_AUTHENTICATE, authenticate);
    yield takeEvery(USER_CHECK_LOGIN, checkLogin);
    yield takeEvery(USER_LOGOUT, logout);
}

export default auth;
