import React, { useRef } from 'react';
import { BookingWrapper } from './styled';
import { useDispatch } from 'react-redux';
import CustomButton from '../UiKit/CustomButton';
import CustomInput from '../UiKit/CustomInput';
import { getHotels } from '../../actions/Hotels';

const BookingSearch = () => {
    const dispatch = useDispatch();
    const locationRef = useRef();
    const dateRef = useRef();
    const daysRef = useRef();

    const findClickHandler = () => {
        const { value: location } = locationRef.current;
        const { value: date } = dateRef.current;
        const { value: days } = daysRef.current;
        console.log(date);
        dispatch(getHotels(location, date, days));
    };

    return (
        <BookingWrapper>
            <CustomInput type={"text"} title={"Локация"} reference={locationRef} />
            <CustomInput type={"date"} title={"Дата заселения"} reference={dateRef} />
            <CustomInput type={"number"} title={"Колличество ночей"} reference={daysRef} />
            <CustomButton title={"Найти"} onClick={findClickHandler} />
        </BookingWrapper>
    )
}

export default BookingSearch;