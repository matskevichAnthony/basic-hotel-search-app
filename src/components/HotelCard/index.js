import React from 'react';
import { CardWrapper, TitleWrapper, PriceWrapper, IconWrapper, RatingWrapper } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const HotelCard = () => {
    return (
        <CardWrapper>
            <IconWrapper><FontAwesomeIcon icon={faCoffee} size="2x" /></IconWrapper>
            <TitleWrapper>
                <h2>Moscow Marriot Grand Hotel</h2>
                <p>28 June, 2020 - 1 день</p>
                <RatingWrapper>
                    <FontAwesomeIcon icon={faCoffee} size="1x" />
                    <FontAwesomeIcon icon={faCoffee} size="1x" />
                    <FontAwesomeIcon icon={faCoffee} size="1x" />
                </RatingWrapper>
            </TitleWrapper>
            <PriceWrapper>
                <FontAwesomeIcon icon={faCoffee} size="1x" />
                <p>price: <h2>23 924$</h2></p>
            </PriceWrapper>
        </CardWrapper>
    )
}

export default HotelCard;