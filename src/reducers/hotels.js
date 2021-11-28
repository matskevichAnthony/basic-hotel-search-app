const initialState = {
    hotels: [],
    images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",],
    location: undefined,
    checkInDate: undefined,
    checkInDateRu: undefined,
    days: undefined,
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