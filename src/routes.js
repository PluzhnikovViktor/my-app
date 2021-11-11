
import Main from "./components/Main/Main";
import {ProductCard} from "./components/ProductCard/ProductCard";


export const routes = [
	{
		path: '/main',
		component: Main,
		exact: true,
	},
	// {
	// 	path: '/productCard',
	// 	component: ProductCard,
	// 	exact: true,
	// },
	{
		path: '/iceCream:id',
		component: ProductCard,
		exact: true,
	}
]