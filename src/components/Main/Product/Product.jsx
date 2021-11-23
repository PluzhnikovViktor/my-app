import React from "react";

import {NavLink} from "react-router-dom";

import style from "./Product.module.css";


export const Product = (props) => {
    return (
        <div className={style.product}>
            <img
              className={style.productImg}
              src={props.img}
              alt="productImg"
              align="middle"
            />
            <div className={style.productInfo}>
              <NavLink
                className={style.productTitle}
                to={`/iceCream${props.id}`}
              >{props.titleProduct}</NavLink>
              <p className={style.productPrice}>{props.price}</p>
            </div>
        </div>
    )
}
