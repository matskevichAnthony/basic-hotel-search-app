import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';
const today = dayjs().format('YYYY-MM-DD');
export const getHotels = (location = 'Москва', date = today, days = 1) => {
    return async dispatch => {
        const dayJsLocalized = dayjs.extend(localizedFormat);
        const checkOut = dayjs(date).add(days, 'day').format('YYYY-MM-DD');
        const checkOutTransformed = dayJsLocalized(date).locale(ru).add(days, 'day').format('LL');
        console.log(checkOutTransformed);
        const response = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${checkOut}&limit=10&lang=ru`);
        const json = await response.json();
        console.log(json);
        dispatch({
            type: "GET_HOTELS",
            payload: {
                hotels: json,
                location,
                checkInDate: date,
                checkInDateRu: checkOutTransformed,
                days: days,
            }

        })
    }
};