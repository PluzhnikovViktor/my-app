import React, {useReducer, useState} from "react";
import style from "./CartElem.module.css";

import deletePic from "../../../../assets/image/delete.svg";
import {render} from "react-dom";

export const CartElem = (props) => {

	const cart = useState(JSON.parse(localStorage.getItem('cart')));

	const deleteItem = () => {
		// cart.find(x => x.id === props.id);
		// console.log('===>props.id', props.id);
			const newArr = cart[0].filter(f => {
			return f.id !== props.id
		})

		console.log(newArr)
		localStorage.setItem('cart', JSON.stringify(newArr))
		console.log(newArr)

	}


	return (
		<div className={style.main}>
			<div className={style.containerItem}>
				<div className={style.containerImg}>
					<img
						className={style.productImg}
						src={props.img} alt="productImg"
						align="middle" />
				</div>
				<p className={style.productTitle}>{props.titleProduct}</p>
				<p className={style.productPrice}>{props.price}</p>
				<p></p>
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