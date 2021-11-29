import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import Stars from '../UiKit/Stars';
import { FAVORITES_TOGGLE } from '../../store/constants';

import {
    Wrapper,
    TitleWrapper,
    PriceWrapper,
    Icon,
    Price,
    Title,
    StyledDate,
    IconBackground,
} from './styled';

const HotelCard = ({ hotelId, hotelName, price, stars, checkInDate, days, isCompact }) => {
    const dispatch = useDispatch();

    const likeClickHandler = (id) => {
        dispatch({
            type: FAVORITES_TOGGLE,
            payload: {
                id,
            },
        });
    };

    return (
        <Wrapper>
            {!isCompact && (
                <Icon>
                    <IconBackground><FontAwesomeIcon icon={faHome} size="2x" /></IconBackground>
                </Icon>
            )}
            <TitleWrapper>
                <Title>{hotelName}</Title>
                <StyledDate>{checkInDate}  一  {days} день</StyledDate>
                <Stars count={stars} />
            </TitleWrapper>
            <PriceWrapper>
                <FontAwesomeIcon
                    icon={faHeart}
                    size="1x"
                    style={{ color: 'E55858' }}
                    onClick={() => likeClickHandler(hotelId)}
                />
                <Price>price: <b>{price}₽</b></Price>
            </PriceWrapper>
        </Wrapper>
    );
};

export default HotelCard;
