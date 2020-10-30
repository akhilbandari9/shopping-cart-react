import { useState, useEffect } from 'react';
import { calculateTotalPrice } from '../utils/operations';
import Button from './Button';

const EditItem = ({ item, onCancel, onSaveQuantity }) => {
	const [quantity, setQuantity] = useState(0);
	useEffect(() => {
		setQuantity(item.quantity);
	}, [item]);

	const addOne = () => {
		setQuantity(Number(quantity) + 1);
	};
	const removeOne = () => {
		setQuantity(Number(quantity) - 1);
	};
	const saveQuantity = () => {
		onSaveQuantity({
			...item,
			quantity,
		});
	};

	return (
		<div>
			<div className='text-left'>
				Price : $ {calculateTotalPrice({ price: item.price, quantity })}
			</div>
			<form
				className='form-inline mt-2'
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className='input-group'>
					<label htmlFor='quantity'>Quantity: </label>
					<input
						type='text'
						className='form-control form-control-sm ml-2'
						id='quantity'
						value={Number(quantity)}
						onChange={(e) => setQuantity(e.target.value)}
					/>
					<div className='btn-group ml-2'>
						<Button label='+' onClick={addOne} />
						<Button label='-' onClick={removeOne} isDisabled={quantity === 0} />
					</div>

					<div className='btn-group ml-2'>
						<Button
							label='Save'
							onClick={saveQuantity}
							isDisabled={quantity === item.quantity}
						/>
						<Button onClick={onCancel} label='Cancel' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditItem;
