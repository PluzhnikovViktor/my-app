import React, {useState} from "react";
import style from './Header.module.css';
import logoHeader from '../../assets/image/LogoHeader.png';
import logPeople from '../../assets/image/logPeople.png';
import basket from '../../assets/image/basket.png';
import ellipse from '../../assets/image/ellipse.png';
import {Modal} from "./Modal";
import {ModalAut} from "./ModalAut";
import {NavLink} from "react-router-dom";

const Header = () => {

    const [modalActive, setModalActive] = useState(true);
    const [modalAutActive, setModalAutActive] = useState(true);

    return (
        <header className={style.header}>
            <div className={style.containerHeader}>
                <div className={style.containers}>
                    <img className={style.logoHeader} src={logoHeader} alt="logo"/>
                </div>
                <div className={style.containers}>
                    <img className={style.logPeople} src={logPeople} alt="logPeople"/>
                    <div className={style.login}>

                            <button onClick={() => setModalActive(true)}>Sign up</button>
                            <p className={style.authorization}>/</p>
                            <button onClick={() => setModalAutActive(true)}>Sing in</button>

                    </div>
                </div>
                <div className={style.containers}>
                    <img className={style.basket} src={basket} alt="logo"/>
                    <div className={style.basketNum}>
                        <img className={style.ellipse} src={ellipse} alt="logPeople"/>
                        <p className={style.number}>1</p>
                    </div>
                    {/*<p className={style.basketName}>Cart</p>*/}
                  <NavLink
                    className={style.productTitle}
                    to={"/Basket"}
                  >Cart</NavLink>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
            <ModalAut active={modalAutActive} setActive={setModalAutActive} />
        </header>
    )
}

export default Header;

