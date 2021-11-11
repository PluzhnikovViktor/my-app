import React from "react";
import style from './Header.module.css';
import logoHeader from '../../assets/image/LogoHeader.png';
import logPeople from '../../assets/image/logPeople.png';
import basket from '../../assets/image/basket.png';
import ellipse from '../../assets/image/ellipse.png';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.containerHeader}>
                <div className={style.containers}>
                    <img className={style.logoHeader} src={logoHeader} alt="logo"/>
                </div>
                <div className={style.containers}>
                    <img className={style.logPeople} src={logPeople} alt="logPeople"/>
                    <p className={style.authorization}><a href='#'>Sign up</a>  /  <a href='#'>Sign in</a> </p>
                </div>
                <div className={style.containers}>
                    <img className={style.basket} src={basket} alt="logo"/>
                    <div className={style.basketNum}>
                        <img className={style.ellipse} src={ellipse} alt="logPeople"/>
                        <p className={style.number}>1</p>
                    </div>
                    <p className={style.basketName}>Cart</p>
                </div>
            </div>
        </header>
    )
}

export default Header;

