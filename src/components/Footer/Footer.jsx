import React from "react";
import style from "./Footer.module.css";
import logoHeader from "../../assets/image/LogoHeader.png";

export const Footer = () => {
    return (
        <div>
            <footer className={style.footer}>
                <div className={style.containerFooter}>
                    <div className={style.container}>
                        <img className={style.logoHeader} src={logoHeader} alt="logo"/>
                    </div>
                    <div className={style.containerConnect}>
                        <div className={style.containers}>
                            <a href='#' className={style.connection}>Our Products</a>
                        </div>
                        <div className={style.containers}>
                            <a href='#' className={style.connection}>Privacy Terms</a>
                        </div>
                        <div className={style.containers}>
                            <a href='#' className={style.connection}>Twitter</a>
                        </div>
                        <div className={style.containers}>
                            <a href='#' className={style.connection}>Facebook</a>
                        </div>
                        <div className={style.containers}>
                            <a href='#' className={style.connection}>Email</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={style.footerTrademark}>
                <p className={style.trademark}>© 2021 Justice-team. All rights reserved.</p>
            </div>
        </div>
    )
}

// export default Footer;