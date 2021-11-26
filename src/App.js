import React from 'react';
//import pages
import Hotels from './pages/Hotels';
import Login from './pages/Login';
//import components

import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';

//import modules
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
function App() {

  const location = useLocation();

  return (
    <div className="App">
      {/* <CustomButton />
      <CustomInput /> */}
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/hotels" exact>
          <Hotels />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
