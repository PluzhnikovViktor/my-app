import React, {useReducer, useState} from "react";

import style from "./CartElem.module.css";

import deletePic from "../../../../assets/image/delete.svg";

export const CartElem = (props) => {

	const deleteItem = () => {
			const newArr = props.cart.filter(f => {
			return f.id !== props.id
		})
		props.setCart(newArr)
		localStorage.setItem('cart', JSON.stringify(newArr))
	}

	return (
		<div className={style.main}>
			<div className={style.containerItem}>
				<div className={style.containerImg}>
					<img
						className={style.productImg}
						src={props.img}
						alt="productImg"
						align="middle"
					/>
				</div>
				<p className={style.productTitle}>
					{props.titleProduct}
				</p>
				<p className={style.productPrice}>
					{props.price}
				</p>
				<button
					onClick={deleteItem}
					className={style.buttonDelete}>
					<img
						className={style.buttonDeletePic}
						src={deletePic}
						alt="delete"/>
				</button>
			</div>
		</div>
	)
}