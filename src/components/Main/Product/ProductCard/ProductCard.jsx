import React, {useState, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";

import style from './ProductCard.module.css';
import plus from "../../../../assets/image/plus.svg";
import minus from "../../../../assets/image/minus.svg";


export const ProductCard = (props) => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	const [counter, setCounter] = useState(0)
	const {id} = useParams();

	const {
		img,
		price,
		titleProduct,
		description1,
		description2
	} = products.filter(el => el.id === +id)[0]

	const productToCart = () => {
		const newArray = products.map(e => {
			if (e.id === +id) {
				if (e.total < counter || counter < 0) {
					alert('стока нету')
					return e
				} else {
					// e.total = e.total - counter
					// return e
					return {
						...e,
						total: e.total - counter
					}
				}
			} else {
				return e
			}
		})
		
		localStorage.setItem('iceCreams', JSON.stringify(newArray))
		setProductToCart(newArray)
	}

	const setProductToCart = (newArray) => {
		const productToCart = newArray.filter((product) => product.id === +id)[0]
		
		if (productToCart.total >= counter && counter !== 0){
			
			const fullProductsCart = JSON.parse(localStorage.getItem('cart'));
			if (fullProductsCart && fullProductsCart.length > 0) {
				productToCart.total = counter
				localStorage.setItem('cart', JSON.stringify([...fullProductsCart, productToCart]))
				
			} else {
				productToCart.total = counter
				localStorage.setItem('cart', JSON.stringify([productToCart]))
				
			}
		}
	}

	// const productToCart = () => {
	// 	let isError = false;
	// 	const newIceCream = products.map(e => {
	// 		if (e.id === +id) {
	// 			if (e.total >= counter && counter > 0) {
	// 				isError = false
					// return {
					// 	...e,
					// 	total: e.total - counter
					// }
	// 			}
	// 			isError = true
	// 			return e

	// 		} else {
	// 			return e
	// 		}
	// 	})
	// 	localStorage.setItem('iceCreams', JSON.stringify(newIceCream))

	// 	const product = products.filter((product) => product.id === +id)[0]
	// 	const productToCart = newIceCream.filter((product) => product.id === +id)[0]

	// 	console.log(product.total)
	// 	console.log(productToCart.total)

	// 	if (product.total !== productToCart.total) {
	// 		const total = product.total - productToCart.total

	// 		const arrayToCart = products.map(e => {
	// 			if (e.id === +id) {
	// 				if (e.total >= counter && counter > 0) {
	// 					return {
	// 						...e,
	// 						total: total
	// 					}
	// 				}
	// 				return e

	// 			} else {
	// 				return e
	// 			}
	// 		})
	// 		const prod = arrayToCart.filter((product) => product.id === +id)[0]

	// 		const dsad = JSON.parse(localStorage.getItem('cart'))

	// 		if (!isError) {
	// 			console.log('===>dsad', dsad);
	// 			console.log('===>isError', isError);
	// 			console.log('===>prod', prod);
	// 			if (dsad) {
	// 				localStorage.setItem('cart', JSON.stringify([...dsad, prod]))
	// 			} else {
	// 				localStorage.setItem('cart', JSON.stringify([prod]))
	// 			}
	// 		}
	// 	}
	// }

	// const setProductToCart = (newArray, total) => {

		// if (product.total >= counter && counter > 0 ){
		// 	productToCart.total = counter
		// 	const fullProductsCart = JSON.parse(localStorage.getItem('cart'));
		// 	if (fullProductsCart && fullProductsCart.length > 0) {
		// 		localStorage.setItem('cart', JSON.stringify([...fullProductsCart, productToCart]))
		// 	} else {
		// 		localStorage.setItem('cart', JSON.stringify([productToCart]))
		// 	}
		// } else {
		// 	alert('Товар отсутствует')
		// }
	// }

	return (
		<main className={style.main}>
			<div className={style.pageLinks}>
				<NavLink className={style.pageLink} to={`/iceCream`}>Main page /</NavLink>
				<NavLink className={style.pageLinkMain} to={'#!'}>Product card</NavLink>
			</div>
			<div className={style.imageProduct}>
				<img src={img}
				     alt="imageProduct"
				/>
			</div>
			<div className={style.descProduct}>
				<button className={style.productId}>SKU: BXD100BLK</button>
				<p className={style.title}>{titleProduct}</p>
				<p className={style.descriptionTitle}>Description:</p>
				<div className={style.descriptionContainer}>
					<p className={style.description}>{description1}</p>
					<p className={style.description}>{description2}</p>
				</div>
				<div className={style.counterPrice}>
					<p className={style.price}>{price}</p>
					<div className={style.counterContainer}>
						<button
							className={style.counterControl}
							onClick={() => setCounter(counter - 1)}>
							<img
								src={minus}
								alt="minus"
							/>
						</button>
						<input
							className={style.counterInput}
							type="text"
							value={counter}
						/>
						<button className={style.counterControl}
						        onClick={() => setCounter(counter + 1)}>
							<img
								src={plus}
								alt="plus"
							/>
						</button>
					</div>
				</div>
				<button
					className={style.buy}
					onClick={productToCart}
				>Add to cart
				</button>
			</div>
		</main>
	)
}