import React from 'react';
import { useDispatch } from 'react-redux';
import { getNoun } from '../Helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
    HeartWrapper,
    HouseIcon,
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

    let noun = getNoun(days, 'день', 'дня', 'дней');

    return (
        <Wrapper compact={isCompact}>
            {!isCompact && (
                <Icon>
                    <IconBackground><HouseIcon src={require('../../assets/Icons/House.svg').default} /></IconBackground>
                </Icon>
            )}
            <TitleWrapper compact={isCompact}>
                <Title compact={isCompact}>{hotelName}</Title>
                <StyledDate compact={isCompact}>{checkInDate}  一  {days} {noun}</StyledDate>
                <Stars count={stars} isCompact={isCompact} />
            </TitleWrapper>
            <PriceWrapper>
                <HeartWrapper>
                    <FontAwesomeIcon
                        icon={faHeart}
                        size="1x"
                        style={{ color: 'E55858', cursor: 'pointer' }}
                        onClick={() => likeClickHandler(hotelId)}
                    />
                </HeartWrapper>
                <Price isCompact={isCompact}>price: <b isCompact={isCompact}>{price}₽</b></Price>
            </PriceWrapper>
        </Wrapper>
    );
};

export default HotelCard;
