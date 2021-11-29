import styled from "styled-components";

export const RatingWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${p => p.compact ? `-0.1rem` : `0.5rem`};
`;

export const Star = styled.div`
    width: 1rem;
    height: 1rem;
    display: flex;
    transform: ${p => p.compact ? `scale(0.6)` : `scale(1)`};
    background:url(${p => !p.active
        ? require('../../../assets/Icons/Star.svg').default
        : require('../../../assets/Icons/StarActive.svg').default
    }) no-repeat;
`;
