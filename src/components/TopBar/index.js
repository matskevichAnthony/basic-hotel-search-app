import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { USER_LOGOUT } from '../../store/constants';
import { Wrapper, ExitButton } from './styled';

const TopBar = () => {
    const dispatch = useDispatch();

    const logOutClickHandler = () => {
        dispatch({ type: USER_LOGOUT });
    };

    return (
        <Wrapper>
            <h1>Simple Hotel Check</h1>
            <ExitButton onClick={logOutClickHandler}>
                Выйти
                <FontAwesomeIcon size="2x" icon={faSignOutAlt}/>
            </ExitButton>
        </Wrapper>
    );
};

export default TopBar;
