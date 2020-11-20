import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const state = useContext(ProductContext);
	return (
		<div className='products-container'>
			{state.products.map((product) => (
				<Product key={product.id} product={product} addItem={state.addItem} />
			))}
		</div>
	);
};

export default Products;
