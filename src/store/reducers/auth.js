import { USER_SET } from '../constants';

const initialState = {
    isAuth: false,
    login: '',
    password: '',
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default authReducer;
