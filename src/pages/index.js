import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { USER_CHECK_LOGIN } from '../store/constants';
import Login from './Login';
import Hotels from './Hotels';

const Routing = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { isAuth } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch({ type: USER_CHECK_LOGIN });
    }, [dispatch]);

    return (
        <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
                {isAuth ? <Redirect to="/hotels"/> : <Login/>}
            </Route>
            <Route path="/hotels" exact>
                {isAuth ? <Hotels/> : <Redirect to="/"/>}
            </Route>
            <Route>
                <Redirect to="/"/>
            </Route>
        </Switch>
    );
};

export default Routing;
