import React, {useState} from "react";


import {ProductInfo} from "./ProductInfo";

import style from './ProductCard.module.css';
import {Product} from "../index";
import {NavLink, useParams} from "react-router-dom";
// import {cart} from "../../../../mocks/mock";

import plus from "../../../../assets/image/plus.svg";
import minus from "../../../../assets/image/minus.svg";
import {productsMock} from "../../../../mocks/mock";

export const ProductCard = (props) => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	const {id} = useParams();
	const [counter, setCounter] = useState(0)
	const {img, price, titleProduct, description1, description2} = products.filter(el => el.id === +id)[0]
	const exam = () => {
		if (counter <= 0){
			alert('nonono')
		} else {
			alert('yesyesyes');
			const obj = {id: id, title: titleProduct, price: price, total: counter};
			console.log(productsMock[id - 1].total)
			console.log(productsMock[id - 1].total - counter)
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