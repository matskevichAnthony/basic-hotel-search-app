import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CarouselComponent from '../Carousel';
import HotelCard from '../HotelCard';
import { getNoun } from '../Helpers/utils';
import { FavoritesNumber, City, CurrentDate, HotelList, UpperInformation } from './styled';

const SearchResult = ({ location, checkInDateRu, images, hotels, checkInDate, days, favoritesCount }) => {
    let noun = getNoun(favoritesCount, 'отель', 'отеля', 'отелей');

    return (
        <>
            <UpperInformation>
                <City>Отели <span>›</span> {location}</City>
                <CurrentDate>{checkInDateRu}</CurrentDate>
            </UpperInformation>
            <CarouselComponent images={images} />
            <FavoritesNumber>Добавлено в избранное: <b>{favoritesCount > 0 ? favoritesCount : 0}</b> {noun}</FavoritesNumber>
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
                            getNoun={getNoun}
                        />,
                    )}
                </Scrollbars>
            </HotelList>
        </>
    );
};

export default SearchResult;
