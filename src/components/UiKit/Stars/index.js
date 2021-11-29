import React from 'react';
import { RatingWrapper, Star } from './styled';

const MAX_COUNT = 5;
const Stars = ({ count }) => {
    return (
        <RatingWrapper>
            {
                [...Array(MAX_COUNT).keys()].map((index) => (
                    <Star active={index < count} key={index}/>
                ))
            }
        </RatingWrapper>
    );
};

export default Stars;
