import { FAVORITES_SET } from '../constants';

const initialState = {
    favorites: [],
};
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITES_SET:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default favoritesReducer;
