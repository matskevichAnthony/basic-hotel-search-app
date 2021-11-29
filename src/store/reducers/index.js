import { combineReducers } from 'redux';
import authReducer from './auth';
import hotelsReducer from './hotels';
import favoritesReducer from './favorites';

const allReducers = combineReducers({
    hotels: hotelsReducer,
    auth: authReducer,
    favorites: favoritesReducer,
});

export default allReducers;
