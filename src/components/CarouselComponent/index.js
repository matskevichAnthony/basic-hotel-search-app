import React from 'react';
import Carousel from 'react-multi-carousel';
import { Delete } from './styled';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselComponent = () => {
    return (
        <Carousel responsive={responsive} arrows={false} centerMode={true} autoPlay={true} autoPlaySpeed={3500} infinite={true}>
            <Delete />
            <Delete />
            <Delete />
            <Delete />
        </Carousel>
    )
}

export default CarouselComponent;