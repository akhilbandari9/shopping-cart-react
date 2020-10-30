import React from 'react';
import Button from './Button';

const Summary = ({ numberOfItems, totalToPay, onClear }) => {
	return (
		<div className='card my-4 p-3'>
			<div>
				Number of Items : <strong>{numberOfItems}</strong>
			</div>
			<div className='mb-2'>
				Total : <strong>${totalToPay}</strong>
			</div>
			<Button
				label='Clear Cart'
				onClick={onClear}
				isDisabled={numberOfItems === 0}
			/>
		</div>
	);
};

export default Summary;
