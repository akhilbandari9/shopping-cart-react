import React from 'react';

const BTN_CLASS_NAME = 'btn btn-outline-secondary btn-sm';

const Button = ({ onClick, isDisabled = false, label }) => {
	return (
		<button
			className={BTN_CLASS_NAME}
			type='button'
			onClick={onClick}
			disabled={isDisabled}
		>
			{label}
		</button>
	);
};

export default Button;
