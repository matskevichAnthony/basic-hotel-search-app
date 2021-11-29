import styled from "styled-components";

export const RatingWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const Star = styled.div`
    width: 1rem;
    height: 1rem;
    display: flex;
    background:url(${p => !p.active
        ? require('../../../assets/Icons/Star.svg').default
        : require('../../../assets/Icons/StarActive.svg').default
    }) no-repeat;
`;
