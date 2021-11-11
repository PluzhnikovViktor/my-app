import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
import {Footer} from "./components/Footer/index.js";
import {Redirect, Route, Switch} from "react-router-dom";
import {ProductCard} from "./components/ProductCard/ProductCard";
import {routes} from "./routes";
import {Modal} from "./components/Modal";
import {useEffect, useState} from "react";
import {productsMock} from "./mocks/mock";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('iceCreams'))) {
      localStorage.setItem('iceCreams', JSON.stringify(productsMock))
    }
  }, [])

  return (
    <div className="App">

        <Header />
        {/*  <Main />*/}
        {/*  <ProductCard />*/}
        {/*<Modal active={modalActive} setActive={setModalActive} />*/}
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
