//библиотеки
import React, {useState} from "react";

//файлы и компоненты
import {Product} from "./Product";
import {productsMock} from "../../mocks/mock";

//сначала стили потом картинки
import style from './Main.module.css';
import titleImg from '../../assets/image/titleImg.png'


const Main = (number) => {
	const [products, setProducts] = useState(productsMock);

	return (
		<main className={style.main}>
			<div className={style.mainTitle}>
				<h1 className={style.heading}>
					I
					<img className={style.headingImg} src={titleImg} alt="title_image"/>
					ICE CREAM
				</h1>
			</div>
			<div className={style.container}>
				{products.map((product, idx) => (
					<Product number={number} key={idx} id={product.id} img={product.img} titleProduct={product.titleProduct} price={product.price}/>
				))}
			</div>
		</main>
	)
}

export default Main;

