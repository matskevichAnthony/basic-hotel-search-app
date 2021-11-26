export const getHotels = () => {
    return async dispatch => {
        const response = await fetch("http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10&lang=ru");
        const json = await response.json();
        console.log(json);

        dispatch({
            type: "GET_HOTELS",
            payload:
                json,

        })
    }
};