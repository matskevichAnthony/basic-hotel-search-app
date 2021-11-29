import React, { useMemo, useState } from 'react';
import { Wrapper, FavoritesTop, FilterButton, FilterButtons } from './styled';
import { Scrollbars } from 'react-custom-scrollbars-2';
import HotelCard from '../HotelCard';

const Favorites = ({ favorites, checkInDate, days, isCompact }) => {
    const [order, setOrder] = useState({
        by: 'stars',
        direction: false,
    });

    const sortedFavorites = useMemo(() => {
        return favorites.sort((hotelPrev, hotelNext) => {
            const key = order.by;
            return order.direction
                ? hotelPrev[key] - hotelNext[key]
                : hotelNext[key] - hotelPrev[key]
        });
    }, [favorites, order]);

    const sort = (by, direction) => {
        setOrder({ by, direction });
    };

    return (
        <Wrapper>
            <FavoritesTop>
                <h2>Избранное</h2>
                <FilterButtons>
                    <FilterButton
                        onClick={() => sort('stars', !order.direction)}
                    >Рейтинг</FilterButton>
                    <FilterButton
                        onClick={() => sort('priceAvg', !order.direction)}
                    >Цена</FilterButton>
                </FilterButtons>
            </FavoritesTop>
            <Scrollbars style={{ width: '100%', height: '100%' }}>
                {sortedFavorites.map(hotel =>
                    <HotelCard
                        key={hotel.hotelId}
                        hotelId={hotel.hotelId}
                        hotelName={hotel.hotelName}
                        price={hotel.priceAvg}
                        stars={hotel.stars}
                        checkInDate={checkInDate}
                        days={days}
                        isCompact={isCompact}
                    />,
                )}
            </Scrollbars>
        </Wrapper>
    );
};

export default Favorites;
