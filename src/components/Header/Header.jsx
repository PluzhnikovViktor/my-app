import React, {useState, useEffect} from "react";

import {Modal} from "./Modal";
import {ModalAut} from "./ModalAut";
import {NavLink} from "react-router-dom";

import style from './Header.module.css';
import logoHeader from '../../assets/image/LogoHeader.png';
import logPeople from '../../assets/image/logPeople.png';
import basket from '../../assets/image/basket.png';
import ellipse from '../../assets/image/ellipse.png';



const Header = ({user, setOwner, logout, number}) => {

    const [modalActive, setModalActive] = useState(true);
    const [modalAutActive, setModalAutActive] = useState(true);
    // const [number, setNumber] = useState(JSON.parse(localStorage.getItem("cart")).length);



    return (
        <header className={style.header}>
            <div className={style.containerHeader}>
                <div className={style.container}>
                    <img
                      className={style.logoHeader}
                      src={logoHeader}
                      alt="logo"
                    />
                </div>
                <div className={style.container}>
                    <img
                      className={style.logPeople}
                      src={logPeople}
                      alt="logPeople"
                    />
                  {user ?
                    <div className={style.loginOn}>
                      <p className={style.loginName}>{user}</p>
                      <button
                        onClick={logout}
                        className={style.loginOut}>Log out</button>
                    </div>
                    :
                    <div className={style.login}>
                      <button onClick={() => setModalActive(true)}>Sign up</button>
                      <p className={style.authorization}>/</p>
                      <button onClick={() => setModalAutActive(true)}>Sing in</button>
                    </div>
                  }
                </div>
                <div className={style.container}>
                    <img className={style.basket} src={basket} alt="logo"/>
                    <div className={style.basketNum}>
                        <img className={style.ellipse} src={ellipse} alt="logPeople"/>
                        <p className={style.number}>{number}</p>
                    </div>
                  <NavLink
                    className={style.basketName}
                    to={"/Basket"}
                  >Cart</NavLink>
                </div>
            </div>
            <Modal
              active={modalActive}
              setActive={setModalActive}
            />
            <ModalAut
              active={modalAutActive}
              setActive={setModalAutActive}
              setOwner={setOwner}
            />
        </header>
    )
}

export default Header;

