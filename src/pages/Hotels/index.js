import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/Auth';
import { getHotels } from '../../actions/Hotels';
import BookingSearch from '../../components/BookingSearch';
import CarouselComponent from '../../components/CarouselComponent';
import HotelCard from '../../components/HotelCard';

import { HomeWrapper, ContentWrapper, LeftSideWrapper, ContentDiv, ResultsDiv, ContentResultsDiv, ExtraWrapper, HotelListWrapper } from './styled';

const Hotels = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels())
    }, [dispatch]);

    const logOutClickHandler = () => {
        dispatch(logout());
    };

    return (
        <HomeWrapper>
            <button onClick={logOutClickHandler}>Log out</button>
            <ContentWrapper>
                <LeftSideWrapper>
                    <ContentDiv>
                        <BookingSearch />
                    </ContentDiv>
                    <ContentDiv>
                    </ContentDiv>
                </LeftSideWrapper>
                <ResultsDiv>
                    <CarouselComponent />
                    <HotelListWrapper>
                        <HotelCard />
                    </HotelListWrapper>
                </ResultsDiv>
            </ContentWrapper>
        </HomeWrapper>
    )
}

export default Hotels;