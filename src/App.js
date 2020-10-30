import { useEffect, useState } from 'react';
import './App.css';
import Summary from './components/Summary';
import CartItem from './components/CartItem';
import {
	calculateTotalNumberOfItems,
	calculateTotalToPay,
} from './utils/operations';

function App({ items }) {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		setItemList(items);
		//eslint-disable-next-line
	}, []);

	const updateItem = (updatedItem) => {
		const updatedItems = itemList
			.map((item) => (item.id === updatedItem.id ? updatedItem : item))
			.filter((item) => item.quantity > 0);
		setItemList(updatedItems);
	};

	const onClear = () => {
		setItemList([]);
	};

	return (
		<div className='container my-5'>
			<div className='row'>
				<div className='col-sm-8 offset-sm-2'>
					<h2>Shopping Cart</h2>
					<Summary
						onClear={onClear}
						numberOfItems={calculateTotalNumberOfItems(itemList)}
						totalToPay={calculateTotalToPay(itemList)}
					/>
					{itemList.map((item) => (
						<CartItem key={item.id} item={item} onChange={updateItem} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
