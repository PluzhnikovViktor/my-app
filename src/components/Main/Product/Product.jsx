import React from "react";
import style from "./Product.module.css";

export const Product = (props) => {
    return (
        <div className={style.product}>
            <img src={props.img} alt="" align="middle" />
            <h5 className={style.productTitle}>{props.titleProduct}</h5>
            <p className={style.productPrice}>{props.price}</p>
        </div>
    )
}
