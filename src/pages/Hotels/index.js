import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/Auth';
import { getHotels } from '../../actions/Hotels';
import BookingSearch from '../../components/BookingSearch';
import CarouselComponent from '../../components/CarouselComponent';
import HotelCard from '../../components/HotelCard';
import { Scrollbars } from 'react-custom-scrollbars-2';

import {
    HomeWrapper,
    ContentWrapper,
    LeftSideWrapper,
    ContentDiv,
    ResultsDiv,
    HotelListWrapper,
    UpperInformationWrapper,
    CityWrapper,
    DateWrapper
}
    from './styled';

const Hotels = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels())
    }, [dispatch]);

    const logOutClickHandler = () => {
        dispatch(logout());
    };

    const dataHotels = useSelector(state => state.hotels);
    console.log(dataHotels);

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
                    <UpperInformationWrapper>
                        <CityWrapper>Отели › Москва</CityWrapper>
                        <DateWrapper>07 июля 2021</DateWrapper>
                    </UpperInformationWrapper>
                    <CarouselComponent images={dataHotels.images} />
                    <HotelListWrapper>
                        <Scrollbars style={{ width: "100%", height: "100%" }}>
                            {dataHotels.hotels.map((hotel) =>
                                <HotelCard
                                    hotelName={hotel.hotelName}
                                    price={hotel.priceAvg}
                                    stars={hotel.stars}
                                    checkInDate={dataHotels.checkInDate}
                                    days={dataHotels.days}
                                />
                            )}
                        </Scrollbars>
                    </HotelListWrapper>
                </ResultsDiv>
            </ContentWrapper>
        </HomeWrapper>
    )
}

export default Hotels;