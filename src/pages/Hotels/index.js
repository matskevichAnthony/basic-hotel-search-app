import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../actions/Hotels';
import BookingSearch from '../../components/BookingSearch';

import { HomeWrapper, ContentWrapper, LeftSideWrapper, ContentDiv, ResultsDiv } from './styled';

const Hotels = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels())
    }, [dispatch]);

    return (
        <HomeWrapper>
            <ContentWrapper>
                <LeftSideWrapper>
                    <ContentDiv>
                        <BookingSearch />
                    </ContentDiv>
                    <ContentDiv>
                    </ContentDiv>
                </LeftSideWrapper>
                <ResultsDiv></ResultsDiv>
            </ContentWrapper>
        </HomeWrapper>
    )
}

export default Hotels;