//библиотеки
import React, {useState} from "react";

//файлы и компоненты
import {Product} from "./Product";
import {productsMock} from "../../mocks/mock";

//сначала стили потом картинки
import style from './Main.module.css';
import titleImg from '../../assets/image/titleImg.png'


const Main = () => {
	const [products, setProducts] = useState(productsMock);

	// let user = {
	// 	name: 'viktor',
	// 	email: 'ya@ya.ru',
	// 	password: '1111',
	// };
	//
	// let yaUser = JSON.stringify(user);
	// localStorage.setItem("myKey", yaUser);
	// let returnUser = JSON.parse(localStorage.getItem("myKey"))
	// console.log(returnUser)


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
					<Product key={idx} id={product.id} img={product.img} titleProduct={product.titleProduct} price={product.price}/>
				))}
			</div>
		</main>
	)
}

export default Main;

