import { takeEvery, call, put } from 'redux-saga/effects';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { HOTELS_GET, HOTELS_SET } from '../constants';

const today = dayjs().format('YYYY-MM-DD');
const dayJsLocalized = dayjs.extend(localizedFormat);

const API_URL = 'https://engine.hotellook.com/api/v2/';

function* getHotels({ payload = {} }) {
    const { location = 'Москва', date = today, days = 1 } = payload;

    const checkOut = dayjs(date).add(days, 'day').format('YYYY-MM-DD');
    const checkInTransformed = dayJsLocalized(date).locale(ru).format('LL');

    const hotels = yield call(async () => {
        const response = await fetch(`${API_URL}cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${checkOut}&limit=10&lang=ru`);
        return await response.json();
    });

    yield put({
        type: HOTELS_SET,
        payload: {
            hotels: hotels,
            location,
            checkInDate: date,
            checkInDateRu: checkInTransformed,
            days,
        },
    });
}

function* hotels() {
    yield takeEvery(HOTELS_GET, getHotels);
}

export default hotels;
