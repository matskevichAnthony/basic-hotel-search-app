import React, { useEffect } from 'react';
//import pages
import Hotels from './pages/Hotels';
import Login from './pages/Login';
//import components

import CustomButton from './components/UiKit/CustomButton';
import CustomInput from './components/UiKit/CustomInput';

//import modules
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from "./components/GlobalStyle";
import { checkLogin } from './actions/Auth';
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          {isAuth ? <Redirect to="/hotels" /> : <Login />}
        </Route>
        <Route path="/hotels" exact>
          {isAuth ? <Hotels /> : <Redirect to="/" />}
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
