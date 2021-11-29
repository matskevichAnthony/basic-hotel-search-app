import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookingSearch from '../../components/BookingSearch';
import Favorites from '../../components/Favorites';
import TopBar from '../../components/TopBar';
import SearchResult from '../../components/SearchResult';
import { HOTELS_GET } from '../../store/constants';
import { HomeWrapper, ContentWrapper, LeftSideWrapper, RightSideWrapper } from './styled';

const Hotels = () => {
    const dispatch = useDispatch();
    const hotels = useSelector(state => state.hotels);
    const { checkInDate, days } = hotels;

    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch({ type: HOTELS_GET });
    }, [dispatch]);

    return (
        <HomeWrapper>
            <TopBar />
            <ContentWrapper>
                <LeftSideWrapper>
                    <BookingSearch />
                    <Favorites {...favorites} checkInDate={checkInDate} days={days} isCompact={true} />
                </LeftSideWrapper>
                <RightSideWrapper>
                    <SearchResult {...hotels} favoritesCount={favorites.favorites.length} />
                </RightSideWrapper>
            </ContentWrapper>
        </HomeWrapper>
    );
};

export default Hotels;
