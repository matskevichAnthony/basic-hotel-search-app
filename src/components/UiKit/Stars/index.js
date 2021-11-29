import React from 'react';
import { RatingWrapper, Star } from './styled';

const MAX_COUNT = 5;
const Stars = ({ count, isCompact }) => {
    return (
        <RatingWrapper compact={isCompact}>
            {
                [...Array(MAX_COUNT).keys()].map((index) => (
                    <Star compact={isCompact} active={index < count} key={index} />
                ))
            }
        </RatingWrapper>
    );
};

export default Stars;
