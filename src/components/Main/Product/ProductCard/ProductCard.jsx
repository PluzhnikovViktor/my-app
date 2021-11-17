import React, {useState, useEffect} from "react";


import {ProductInfo} from "./ProductInfo";

import style from './ProductCard.module.css';
import {Product} from "../index";
import {NavLink, useParams} from "react-router-dom";
import {cart} from "../../../../mocks/mock";

import plus from "../../../../assets/image/plus.svg";
import minus from "../../../../assets/image/minus.svg";


export const ProductCard = (props) => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	const [counter, setCounter] = useState(0)
	const {id} = useParams();

	const {img, price, titleProduct, description1, description2, total} = products.filter(el => el.id === +id)[0]

	const exam = () => {
		const newArray = products.map(e => {
			if (e.id === id) {
				if (e.total < counter || counter < 0) {
					alert('стока нету')
					return e
				} else
				e.total = e.total - counter
				return e
			} else {
				return e
			}
		})
		localStorage.setItem('iceCreams', JSON.stringify(newArray))
		setProductToCart(newArray)
	}

	const setProductToCart = (newArray) => {
		const productToCart = newArray.filter((product) => product.id === +id)[0]
		const fullProductsCart = JSON.parse(localStorage.getItem('cart'));
		if (fullProductsCart && fullProductsCart.length > 0) {
			localStorage.setItem('cart', JSON.stringify([...fullProductsCart, productToCart]))
		} else {
			localStorage.setItem('cart', JSON.stringify([productToCart]))
		}
	}



	return (
		<main className={style.main}>
			<div className={style.pageLinks}>
				<NavLink className={style.pageLink} to={`/iceCream`}>Main page  /</NavLink>
				<NavLink className={style.pageLinkMain} to={'#!'}>Product card</NavLink>
			</div>
			<div className={style.imageProduct}>
				<img src={img} alt="sdffd"/>
			</div>
			<div className={style.descProduct}>
				<button className={style.productId}>SKU: BXD100BLK</button>
				<p className={style.title}>{titleProduct}</p>
				<p className={style.descriptionTitle}>Description:</p>
				<p className={style.description}>{description1}</p>
				<p className={style.description}>{description2}</p>

				<div className={style}>
					<p className={style.price}>{price}</p>
					<button onClick={() => setCounter(counter - 1)}>
						<img src={minus} alt=""/>
					</button>
					<input type="text" value={counter} />
					<button onClick={() => setCounter(counter + 1)}>
						<img src={plus} alt=""/>
					</button>
				</div>
				<button className={style.buy} onClick={exam}>Add to cart</button>
			</div>
		</main>
	)
}