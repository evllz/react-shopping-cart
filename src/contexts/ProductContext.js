import React, { useState, createContext } from 'react';
import data from '../data';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	const removeItem = (item) => {
		console.log(cart);
		const updateCart = cart.filter((product) => product.id !== item.id);
		console.log(updateCart);
	};

	return (
		<ProductContext.Provider
			value={{
				products: products,
				cart: cart,
				setCart: setCart,
				addItem: addItem,
				removeItem: removeItem,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};
