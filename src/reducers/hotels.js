const initialState = {
    textArray: [],
}
const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOTELS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default hotelsReducer;