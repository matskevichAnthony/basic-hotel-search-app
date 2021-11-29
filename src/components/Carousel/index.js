import React from 'react';
import ReactCarousel from 'react-multi-carousel';
import { StyledImage } from './styled';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Carousel = ({ images }) => {
    return (
        <ReactCarousel
            responsive={responsive}
            arrows={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            infinite={true}
        >
            {images.map((image) => (
                <StyledImage
                    src={require('../../assets/carouselImages/' + image).default}
                    key={image}
                />
            ))}
        </ReactCarousel>
    );
};

export default Carousel;
