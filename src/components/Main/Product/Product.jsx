import React from "react";
import style from "./Product.module.css";
import {NavLink} from "react-router-dom";

export const Product = (props) => {
    return (
        <div className={style.product}>
            <img className={style.productImg} src={props.img} alt="" align="middle" />
            <div className={style.productInfo}>
              <NavLink 
                className={style.productTitle} 
                to={`/iceCream${props.id}`}
              >
                {props.titleProduct}
              </NavLink>
              {/*<a className={style.productTitle}>{props.titleProduct}</a>*/}
              <p className={style.productPrice}>{props.price}</p>
            </div>
        </div>
    )
}
