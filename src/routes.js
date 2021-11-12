
import Main from "./components/Main/Main";
import {ProductCard} from "./components/Main/Product/ProductCard/ProductCard";
import {Basket} from "./components/Main/Basket/Basket";


export const routes = [
	{
		path: '/main',
		component: Main,
		exact: true,
	},
	{
		path: '/Basket',
		component: Basket,
		exact: true,
	},
	{
		path: '/iceCream:id',
		component: ProductCard,
		exact: true,
	},
]