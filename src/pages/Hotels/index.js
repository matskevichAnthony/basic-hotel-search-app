import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
    DateWrapper,
    TopBar,
    ExitButtonWrapper,
    FavoritesNumber,
    FavoritesTopWrapper,
    FilterButton,
    FilterButtonsWrapper,
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
            <TopBar>
                <h1>Simple Hotel Check</h1>
                <ExitButtonWrapper onClick={logOutClickHandler}>
                    Выйти
                    <FontAwesomeIcon size="2x" icon={faSignOutAlt} />
                </ExitButtonWrapper>
            </TopBar>
            <ContentWrapper>
                <LeftSideWrapper>
                    <ContentDiv>
                        <BookingSearch />
                    </ContentDiv>
                    <ContentDiv>
                        <FavoritesTopWrapper>
                            <h2>Избранное</h2>
                            <FilterButtonsWrapper>
                                <FilterButton>Рейтинг</FilterButton>
                                <FilterButton>Цена</FilterButton>
                            </FilterButtonsWrapper>
                        </FavoritesTopWrapper>
                        <Scrollbars style={{ width: "100%", height: "100%" }}>
                            {dataHotels.hotels.map((hotel) =>
                                <HotelCard
                                    hotelName={hotel.hotelName}
                                    price={hotel.priceAvg}
                                    stars={hotel.stars}
                                    checkInDate={dataHotels.checkInDate}
                                    days={dataHotels.days}
                                    isCompact={true}
                                />
                            )}
                        </Scrollbars>
                    </ContentDiv>
                </LeftSideWrapper>
                <ResultsDiv>
                    <UpperInformationWrapper>
                        <CityWrapper>Отели › {dataHotels.location}</CityWrapper>
                        <DateWrapper>{dataHotels.checkInDateRu}</DateWrapper>
                    </UpperInformationWrapper>
                    <CarouselComponent images={dataHotels.images} />
                    <FavoritesNumber>Добавлено в избранное: <b>3</b> отеля</FavoritesNumber>
                    <HotelListWrapper>
                        <Scrollbars style={{ width: "100%", height: "100%" }}>
                            {dataHotels.hotels.map((hotel) =>
                                <HotelCard
                                    hotelName={hotel.hotelName}
                                    price={hotel.priceAvg}
                                    stars={hotel.stars}
                                    checkInDate={dataHotels.checkInDate}
                                    days={dataHotels.days}
                                    isCompact={false}
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