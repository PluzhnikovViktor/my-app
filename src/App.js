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
  // const [modalActive, setModalActive] = useState(true);
  // const [modalAutActive, setModalAutActive] = useState(true);


  const [owner, setOwner] = useState()


  useEffect(() => {

    console.log(localStorage.getItem('token'))
    setOwner(localStorage.getItem('token'))

  },[])

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('iceCreams'))) {
      localStorage.setItem('iceCreams', JSON.stringify(productsMock))
    }
  }, [])


  //
  // const login = (value, setValue) => {
  //   const users = JSON.parse(localStorage.getItem('users'));
  //   const customer = users.filter(e => e.email === value.email)[0]
  //   if (customer) {
  //     if (customer.password === value.password){
  //       localStorage.setItem('token', JSON.stringify(customer.email))
  //     } else {
  //       setValue('Неправильные данные');
  //     }
  //   } else {
  //     setValue('Неправильные данные');
  //   }
  // }
  //
  // const logout = () => {
  //   localStorage.removeItem('token')
  //   setUser(null)
  // }

  const logout = () => {
    localStorage.removeItem('token')
    setOwner(null)
  }

  return (
    <div className="App">
        <Header user={owner} setOwner={setOwner} logout={logout} />
        {/*  <Main />*/}
        {/*  <ProductCard />*/}
        {/*<Modal active={modalActive} setActive={setModalActive} />*/}
        {/*<ModalAut active={modalAutActive} setActive={setModalAutActive} />*/}
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
