import React from "react";
import style from "./ProductInfo.module.css";
import {NavLink} from "react-router-dom";

export const ProductInfo = (props) => {
    return (
        <div className={style.product}>
          <img src={props.img} alt="" align="middle" />
          <div className={style.productInfo}>
            <p className={style.productPrice}>{props.price}</p>
            <p>{props.description}</p>
          </div>
        </div>
    )
}
