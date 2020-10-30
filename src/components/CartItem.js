import React, { useState } from 'react';
import { calculateTotalPrice } from '../utils/operations';
import Button from './Button';
import EditItem from './EditItem';
const CartItem = ({ item, onChange }) => {
	const [isEditing, setIsEditing] = useState(false);
	const toggleEditing = () => {
		setIsEditing(!isEditing);
	};
	const itemChange = (item) => {
		onChange(item);
		toggleEditing();
	};
	const removeItem = () => {
		const updatedItem = {
			...item,
			quantity: 0,
		};
		onChange(updatedItem);
	};
	return (
		<div className='my-4'>
			<h5>{item.name}</h5>
			{isEditing && (
				<EditItem
					item={item}
					onCancel={toggleEditing}
					onSaveQuantity={itemChange}
				/>
			)}
			{!isEditing && (
				<>
					<div>
						{item.quantity} x ${item.price} ={' '}
						<strong>{calculateTotalPrice(item)}</strong>
					</div>
					<div className='btn-group mt-2' role='group' aria-label='Change'>
						<Button label='Change Quanity' onClick={toggleEditing} />
						<Button label='Remove' onClick={removeItem} />
					</div>
				</>
			)}
		</div>
	);
};

export default CartItem;
