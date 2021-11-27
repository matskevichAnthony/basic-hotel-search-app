import dayjs from 'dayjs';
const today = dayjs().format('YYYY-MM-DD');
export const getHotels = (location = 'Москва', date = today, days = 1) => {
    return async dispatch => {
        const checkOut = dayjs(date).add(days, 'day').format('YYYY-MM-DD');
        const response = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${checkOut}&limit=10&lang=ru`);
        const json = await response.json();
        console.log(json);

        dispatch({
            type: "GET_HOTELS",
            payload:
                json,

        })
    }
};