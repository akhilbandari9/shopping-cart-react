import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const SHOPPING_CART_ITEMS = [
	{
		id: '1',
		name: 'Eggs',
		price: 5,
		quantity: 1,
	},
	{
		id: '2',
		name: 'Milk',
		price: 15,
		quantity: 2,
	},
	{
		id: '3',
		name: 'Bread',
		price: 30,
		quantity: 3,
	},
];
ReactDOM.render(
	<React.StrictMode>
		<App items={SHOPPING_CART_ITEMS} />
	</React.StrictMode>,
	document.getElementById('root')
);
