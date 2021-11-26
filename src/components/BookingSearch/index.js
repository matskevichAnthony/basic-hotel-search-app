import React from 'react';
import { BookingWrapper } from './styled';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

const BookingSearch = () => {
    return (
        <BookingWrapper>
            <CustomInput type={"text"} title={"Локация"} />
            <CustomInput type={"date"} title={"Дата заселения"} />
            <CustomInput type={"text"} title={"Колличество ночей"} />
            <CustomButton title={"Найти"} />
        </BookingWrapper>
    )
}

export default BookingSearch;