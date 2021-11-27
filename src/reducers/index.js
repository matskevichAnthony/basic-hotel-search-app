import { combineReducers } from 'redux';
import authReducer from './auth';
import hotelsReducer from './hotels';

const allReducers = combineReducers({
    hotels: hotelsReducer,
    auth: authReducer,
});

export default allReducers;