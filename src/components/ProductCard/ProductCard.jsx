import React, {useState} from "react";

import {productsMock} from "../../mocks/mock";
import {ProductInfo} from "./ProductInfo";

import style from './ProductCard.module.css';
import {Product} from "../Main/Product";
import {useParams} from "react-router-dom";

export const ProductCard = () => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('iceCreams')));
	const {id} = useParams();

	const {img, price, titleProduct, description} = products.filter(el => el.id === +id)[0]
	return (
		<div className={style.main}>
			<div className={style.imageProduct}>
				<img src={img} alt="sdffd"/>
			</div>
			<div className={style.descProduct}>
				<button className={style.productId}>SKU: BXD100BLK</button>
				<p className={style.title}>{titleProduct}</p>
				<p className={style.description}>{description}</p>
				<p className={style.price}>{price}</p>
				<button className={style.buy}>Add to cart</button>
			</div>
		</div>
	)
}