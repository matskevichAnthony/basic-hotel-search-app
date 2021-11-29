import React, { useMemo, useState } from 'react';
import { Wrapper, FavoritesTop, FilterButton, FilterButtons, ArrowWrapper, Arrow } from './styled';
import { sortButtonMode } from '../Helpers/utils';
import { Scrollbars } from 'react-custom-scrollbars-2';
import HotelCard from '../HotelCard';

const Favorites = ({ favorites, checkInDate, days, isCompact }) => {
    const [order, setOrder] = useState({
        by: 'stars',
        direction: false,
    });
    const [filterButtonMode, setFilterButtonMode] = useState(1);

    const sortedFavorites = useMemo(() => {
        return favorites.sort((hotelPrev, hotelNext) => {
            const key = order.by;
            return order.direction
                ? hotelPrev[key] - hotelNext[key]
                : hotelNext[key] - hotelPrev[key]
        });
    }, [favorites, order]);

    const sort = (by, direction, e) => {
        setOrder({ by, direction });
        sortButtonMode(e, filterButtonMode, setFilterButtonMode);
    };

    return (
        <Wrapper>
            <FavoritesTop>
                <h2>Избранное</h2>
                <FilterButtons>
                    <FilterButton
                        onClick={(e) => sort('stars', !order.direction, e)}
                    >Рейтинг
                        <ArrowWrapper>
                            <Arrow>˄</Arrow>
                            <Arrow>˅</Arrow>
                        </ArrowWrapper>
                    </FilterButton>
                    <FilterButton
                        onClick={(e) => sort('priceAvg', !order.direction, e)}
                    >Цена
                        <ArrowWrapper>
                            <Arrow>˄</Arrow>
                            <Arrow>˅</Arrow>
                        </ArrowWrapper>
                    </FilterButton>
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
