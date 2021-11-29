import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { HOTELS_GET } from '../../store/constants';
import CustomButton from '../UiKit/CustomButton';
import CustomInput from '../UiKit/CustomInput';
import { Wrapper, BookingForm } from './styled';

const BookingSearch = () => {
    const dispatch = useDispatch();
    const locationRef = useRef();
    const dateRef = useRef();
    const daysRef = useRef();

    const findClickHandler = () => {
        const { value: location } = locationRef.current;
        const { value: date } = dateRef.current;
        const { value: days } = daysRef.current;

        dispatch({
            type: HOTELS_GET,
            payload: { location, date, days },
        });
    };

    return (
        <Wrapper>
            <BookingForm>
                <CustomInput type={'text'} title={'Локация'} reference={locationRef} />
                <CustomInput type={'date'} title={'Дата заселения'} reference={dateRef} />
                <CustomInput type={'number'} title={'Колличество ночей'} reference={daysRef} />
                <CustomButton title={'Найти'} onClick={findClickHandler} />
            </BookingForm>
        </Wrapper>
    );
};

export default BookingSearch;
