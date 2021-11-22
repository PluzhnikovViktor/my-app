import React, {useState} from "react";
import style from "./Basket.module.css";
import {NavLink} from "react-router-dom";
// import {cart} from "../../../mocks/mock";
// import {CartElem} from "./CartElem/CartElem";
import { CartElem } from "./CartElem/CartElem";


export const Basket = () => {

	const cart = useState(JSON.parse(localStorage.getItem('cart')));
	// alert(JSON.parse(localStorage.getItem('cart')))
	console.log(cart)




	

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
			<div className={style.container}>
				<div className={style.cartContainer}>
					{cart[0].map((item, idx) => (
						<CartElem
							key={idx}
							id={item.id}
							img={item.img}
							titleProduct={item.titleProduct}
							price={item.price}
						/>
					))}
				</div>
				<div className={style.subContainer}>
					<p>Sub total: </p>
					<p>итого: </p>
					<button className={style.buttonTotal}>Check out</button>
				</div>

			</div>
		</main>
	)
}