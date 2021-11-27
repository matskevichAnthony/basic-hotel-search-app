const initialState = {
    isAuth: false,
    login: "",
    password: "",
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default authReducer;