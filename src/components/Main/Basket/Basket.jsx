import React, {useState} from "react";
import style from "./Basket.module.css";
import {NavLink} from "react-router-dom";
import {cart} from "../../../mocks/mock";

export const Basket = () => {

	const c = useState(JSON.parse(localStorage.getItem('cart')))
	

	return (
		<main className={style.main}>
			<div className={style.pageLinks}>
				<span>
					<NavLink
						className={style.pageLink} to={`/iceCream`}>Main page  /</NavLink>
				</span>
				<span>
					<NavLink className={style.pageLinkMain} to={'#!'}> Basket</NavLink>
				</span>
			</div>

			<br />
			<h1 className={style.pageTitle}>Basket</h1>
		</main>
	)
}