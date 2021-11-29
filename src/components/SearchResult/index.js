import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CarouselComponent from '../Carousel';
import HotelCard from '../HotelCard';
import { FavoritesNumber, City, CurrentDate, HotelList, UpperInformation } from './styled';

const SearchResult = ({ location, checkInDateRu, images, hotels, checkInDate, days, favoritesCount }) => {
    return (
        <>
            <UpperInformation>
                <City>Отели › {location}</City>
                <CurrentDate>{checkInDateRu}</CurrentDate>
            </UpperInformation>
            <CarouselComponent images={images} />
            <FavoritesNumber>Добавлено в избранное: <b>{favoritesCount > 0 ? favoritesCount : 0}</b> отеля</FavoritesNumber>
            <HotelList>
                <Scrollbars style={{ width: '100%', height: '100%' }}>
                    {hotels.map(hotel =>
                        <HotelCard
                            key={hotel.hotelId}
                            hotelId={hotel.hotelId}
                            hotelName={hotel.hotelName}
                            price={hotel.priceAvg}
                            stars={hotel.stars}
                            checkInDate={checkInDate}
                            days={days}
                            isCompact={false}
                        />,
                    )}
                </Scrollbars>
            </HotelList>
        </>
    );
};

export default SearchResult;
