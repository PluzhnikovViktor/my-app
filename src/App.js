import {Redirect, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";


import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/index.js";
import {routes} from "./routes";
import {productsMock} from "./mocks/mock";

import './App.css';


const App = () => {
  // const [modalActive, setModalActive] = useState(true);
  // const [modalAutActive, setModalAutActive] = useState(true);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('iceCreams'))) {
      localStorage.setItem('iceCreams', JSON.stringify(productsMock))
    }
  }, [])

  const [user, setUser] = useState({
    password: '',
    email: '',
  });

  return (
    <div className="App">
        <Header user={user} setUser={setUser} />
        {/*  <Main />*/}
        {/*  <ProductCard />*/}
        {/*<Modal active={modalActive} setActive={setModalActive} />*/}
        {/*<ModalAut active={modalAutActive} setActive={setModalAutActive} />*/}
        <Switch>
            {routes.map((route, index) => {
               return <Route
                  key={route.index}
                  path={route.path}
                  component={route.component}
                />
            }
            )}
          <Redirect path='/' to='/main'/>
        </Switch>

        <Footer />
      
    </div>

  );
}

export default App;
