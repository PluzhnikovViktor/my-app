import {Redirect, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import React from "react";

import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/index.js";
import {PublicRoutes, PrivateRoutes} from "./routes";
import {productsMock} from "./mocks/mock";

import './App.css';

export const context = React.createContext(null)

const App = () => {

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    setOwner(localStorage.getItem('token'))
  },[])
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('iceCreams'))) {
      localStorage.setItem('iceCreams', JSON.stringify(productsMock))
    }
  }, [])

  const [owner, setOwner] = useState()
  const logout = () => {
    localStorage.removeItem('token')
    setOwner(null)
  }

  return (
    <div className="App">
        <Header user={owner} setOwner={setOwner} logout={logout} />
      <context.Provider value={owner}>
        <Switch>
            {owner ?
              PrivateRoutes.map((route, index) => {
               return <Route
                  key={route.index}
                  path={route.path}
                  component={route.component}
                />
            })
              :
              PublicRoutes.map((route, index) => {
                return <Route
                  key={route.index}
                  path={route.path}
                  component={route.component}
                />
              })
            }
          <Redirect path='/' to='/main'/>
        </Switch>
      </context.Provider>
        <Footer />
      
    </div>

  );
}

export default App;
