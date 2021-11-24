import React, {useReducer, useState, useContext} from "react";

import style from "./CartElem.module.css";

import deletePic from "../../../../assets/image/delete.svg";
import {useParams} from "react-router-dom";
import {setCountCart} from "../../../../App";

export const CartElem = (props) => {

	const setCount = useContext(setCountCart)

	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	// const [currentProduct, setCurrentProduct] = useState({});

	// const [arrCart, setArrCart] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	// const {id} = useParams();
	// useLayoutEffect(() => {
	// 	setCurrentProduct(products.filter(el => el.id === +id)[0])
	// }, [id])

	const deleteItem = () => {



		const oneProduct = props.cart.find(h => h.id === +props.id)
		const oneItem = products.find( x => x.id === +props.id)
		const totalSum = oneItem.total + oneProduct.total;



		const newIceCreams = products.map((product) => {
			if (product.id === +props.id) {
				return {
					...product,
					total: totalSum
				}
			}
			return product
		})

		const newArr = props.cart.filter(f => {


			console.log(newIceCreams)


			return f.id !== props.id
		})


		props.setCart(newArr)
		localStorage.setItem('iceCreams', JSON.stringify(newIceCreams))
		localStorage.setItem('cart', JSON.stringify(newArr))
		setCount(JSON.parse(localStorage.getItem('cart')).length)

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