import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const state = useContext(ProductContext);
	const getCartTotal = () => {
		return state.cart
			.reduce((acc, value) => {
				return acc + value.price;
			}, 0)
			.toFixed(2);
	};

	return (
		<div className='shopping-cart'>
			{state.cart.map((item) => (
				<Item key={item.id} {...item} removeItem={state.removeItem} />
			))}

			<div className='shopping-cart__checkout'>
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
