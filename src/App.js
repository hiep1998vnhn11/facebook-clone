import React, { useState, useEffect } from 'react';
import './App.css';
import FirebaseController from './firebase.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';



function App() {



  //control the auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    if(!isLoggedIn) setIsLoggedIn(true);
  };

  const handleLoggedOut = () => {
    if(isLoggedIn){
      FirebaseController.logout();
      setIsLoggedIn(false);
    }
  };

  const onAuthStateChange = (callback) => {
    return FirebaseController.auth.onAuthStateChanged((user) => {
      if(user){
        callback(true);
        let uid=user.uid;
    
      } else callback(false);
    })
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChange(setIsLoggedIn);
    return () => {
      unsubcribe();
    }
  });

  return (
    
    
    <BrowserRouter>
      
      <Switch>
        {/* <Route
          exact
          path="/login"
          render={() => (
            <Login isLoggedIn={isLoggedIn} login={handleLoggedIn} />
          )}
        />

        <Route
          exact
          path="/register"
          render={() => (
            <Register isLoggedIn={isLoggedIn} login={handleLoggedIn} />
          )}
        />
*/

        <Route
          exact
          path="/"
          render={() => (
            <Home isLoggedIn={isLoggedIn} login={handleLoggedIn} />
          )}
        />
/*
        <Route
          exact
          path="/notification"
          render={() => (
            <Home isLoggedIn={isLoggedIn} login={handleLoggedIn} />
          )}
        />

        <Route
          exact
          path="/user/:uid"
          render={() => (
            <Login isLoggedIn={isLoggedIn} login={handleLoggedIn} />
          )}
        /> */}
          
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
