import React, { useState } from 'react';
import { CardWrapper, TitleWrapper, PriceWrapper, IconWrapper, RatingWrapper, StyledPrice, StyledHotelName, StyledDate, IconBackground } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar, faHeart, faHome } from '@fortawesome/free-solid-svg-icons';

const HotelCard = ({ hotelName, price, stars, checkInDate, days }) => {

    const rating = 5;
    const hotelRating = [];

    for (let i = 0; i <= rating - 1; i++) {
        if (stars > 0) {
            console.log(true);
            hotelRating[i] = <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "CDBC1E" }} />
        } else {
            console.log(false);
            hotelRating[i] = <FontAwesomeIcon icon={faStar} size="1x" style={{ color: "black" }} />
        }
        stars--;
    }


    return (
        <CardWrapper>
            <IconWrapper><IconBackground><FontAwesomeIcon icon={faHome} size="2x" /></IconBackground></IconWrapper>
            <TitleWrapper>
                <StyledHotelName>{hotelName}</StyledHotelName>
                <StyledDate>{checkInDate} - {days} день</StyledDate>
                <RatingWrapper>
                    {hotelRating.map((star) => star)}
                </RatingWrapper>
            </TitleWrapper>
            <PriceWrapper>
                <FontAwesomeIcon icon={faHeart} size="1x" style={{ color: "E55858" }} />
                <StyledPrice>price: <b>{price}₽</b></StyledPrice>
            </PriceWrapper>
        </CardWrapper>
    )
}

export default HotelCard;