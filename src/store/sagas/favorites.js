import { takeEvery, select, put } from 'redux-saga/effects';
import { FAVORITES_SET, FAVORITES_TOGGLE } from '../constants';

function* toggle({ payload }) {
    const { favorites } = yield select(state => state.favorites);

    const founded = favorites.find(hotel => hotel.hotelId === payload.id);

    if (!founded) {
        const { hotels } = yield select(state => state.hotels);
        yield put({
            type: FAVORITES_SET,
            payload: {
                favorites: [
                    ...favorites,
                    hotels.find(hotel => hotel.hotelId === payload.id),
                ],
            },
        });
    } else {
        const filtered = favorites.filter(hotel => hotel.hotelId !== payload.id);

        yield put({
            type: FAVORITES_SET,
            payload: {
                favorites: filtered,
            },
        });
    }
}

function* favorites() {
    yield takeEvery(FAVORITES_TOGGLE, toggle);
}

export default favorites;
