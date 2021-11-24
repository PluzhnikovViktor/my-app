import React, {useState, useEffect, useLayoutEffect, useContext} from "react";
import {NavLink, useParams} from "react-router-dom";

import style from './ProductCard.module.css';
import plus from "../../../../assets/image/plus.svg";
import minus from "../../../../assets/image/minus.svg";
import {setCountCart} from "../../../../App";

export const ProductCard = (props) => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('cart')) || []);
	const [counter, setCounter] = useState(0)
	const [error, setError] = useState(false)
	const {id} = useParams();
	const [currentProduct, setCurrentProduct] = useState({});

	const setCount = useContext(setCountCart)

	useLayoutEffect(() => {
		setCurrentProduct(products.filter(el => el.id === +id)[0])
	}, [id])

	const {
		img,
		price,
		titleProduct,
		description1,
		description2,
		total
	} = currentProduct

	const productToCart = () => {
		setError(false)
		const isNextStep = (currentProduct.total - counter) > 0

		const newCard = {
			...currentProduct,
			total: counter,
		}

		const oldCard = {
			...currentProduct,
			total: currentProduct.total - counter,
		}

		const isSameCard = carts.filter((el) => el.id === +id)

		if (isNextStep) {
			const newProducts = products.map((product) => {
				if (product.id === +id) {
					return oldCard
				}
				return product
			})

			if (isSameCard.length) {
				const newCarts = carts.map((product) => {
					if (product.id === +id) {
						return {
							...product,
							total: product.total + counter
						}
					}
					return product
				})
				localStorage.setItem('cart', JSON.stringify(newCarts))
				setCount(JSON.parse(localStorage.getItem('cart')).length)
			} else {
				localStorage.setItem('cart', JSON.stringify([...carts, newCard]))
				setCount(JSON.parse(localStorage.getItem('cart')).length)
			}

			setProducts(newProducts)
			setCurrentProduct(oldCard)
			localStorage.setItem('iceCreams', JSON.stringify(newProducts))
			setCarts(JSON.parse(localStorage.getItem('cart')) )
		} else {
			setError(true)
		}
	}

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
					<div>{total}</div>
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
				{error && <div>ERROR!</div>}
			</div>
		</main>
	)
}