import { combineReducers } from 'redux';
import hotelsReducer from './hotels';

const allReducers = combineReducers({
    hotels: hotelsReducer
});

export default allReducers;