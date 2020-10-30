import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const SHOPPING_CART_ITEMS = [
	{
		id: '1',
		name: 'Eggs',
		price: 2.99,
		quantity: 1,
	},
	{
		id: '2',
		name: 'Milk',
		price: 1.99,
		quantity: 2,
	},
	{
		id: '3',
		name: 'Cheese',
		price: 3.99,
		quantity: 3,
	},
];
ReactDOM.render(
	<React.StrictMode>
		<App items={SHOPPING_CART_ITEMS} />
	</React.StrictMode>,
	document.getElementById('root')
);
