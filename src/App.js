import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import { selectUserData, AUTOLOGIN } from './reduxSlices/authSlice';
import Login from './Pages/Login/Login'; 
import LandingPage from './Pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import './App.css';

const App = () => {

  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AUTOLOGIN());
  }, [])

  if(userData.loading) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="App">
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={LandingPage} />
        {
          !userData.token ? (
            <>
            <Switch>
              <Route path="/" exact component = {Header} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
            
            </>
          ) : (
            <>
                <Redirect to="/" />
              <Header />
              {/* <Switch> */}
              {/* </Switch> */}
            </>
          )
        }
    </div>
  );
}

export default App;
